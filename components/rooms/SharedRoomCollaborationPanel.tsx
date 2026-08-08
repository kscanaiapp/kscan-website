"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  emptyReactionCounts,
  type PublicRoomPreview,
  type PublicRoomPreviewItem,
  type ReactionCounts,
} from "@/lib/roomPreviewTypes";
import { getRoomsSupabaseBrowserClient } from "@/lib/roomsSupabaseBrowser";
import type { SupabaseClient } from "@supabase/supabase-js";

// ─── Types ───────────────────────────────────────────────────────────────────

type JoinStatus =
  | "preview"
  | "joining"
  | "joined"
  | "blocked"
  | "unavailable"
  | "auth_error";

type RoomMessage = {
  id: string;
  room_id: string;
  sender_id: string;
  body: string;
  created_at: string;
};

type ReactionType = "like" | "love" | "looking" | "thumbs_down";

// ─── Constants ─────────────────────────────────────────────────────────────────

const MESSAGE_MAX_LENGTH = 280;
const POLL_INTERVAL_MS = 5000;
const MESSAGE_COOLDOWN_MS = 3000;
const REACTION_COOLDOWN_MS = 1000;

const ACTIVE_REACTIONS: ReadonlyArray<{
  type: ReactionType;
  emoji: string;
  label: string;
}> = [
  { type: "like", emoji: "👍", label: "Like" },
  { type: "love", emoji: "❤️", label: "Love" },
  { type: "looking", emoji: "👀", label: "Looking" },
  { type: "thumbs_down", emoji: "👎", label: "Not it" },
];

const ACCESS_LIMIT_COPY =
  "This invitation link has reached its access limit. Ask the room owner for a new invite.";

const UNAVAILABLE_COPY =
  "This shared room is no longer available. The link may have been disabled or expired.";

const AUTH_ERROR_COPY =
  "Could not establish a session. Please check your connection and try again.";

const DISPLAY_NAME_KEY = "kscan_shared_room_display_name";

// ─── Helpers ───────────────────────────────────────────────────────────────────

function formatMessageTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function sanitizeMessageBody(value: string): string {
  const trimmed = value.replace(/[\r\n]+/g, " ").trim();
  return trimmed.slice(0, MESSAGE_MAX_LENGTH);
}

function isValidReactionType(value: string): value is ReactionType {
  return ACTIVE_REACTIONS.some((r) => r.type === value);
}

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

// ─── Local storage display name ────────────────────────────────────────────────

function readDisplayName(): string {
  if (typeof window === "undefined") return "";
  try {
    const value = window.localStorage.getItem(DISPLAY_NAME_KEY);
    return value ? value.trim().slice(0, 40) : "";
  } catch {
    return "";
  }
}

function writeDisplayName(value: string): void {
  if (typeof window === "undefined") return;
  try {
    const trimmed = value.trim().slice(0, 40);
    if (trimmed) {
      window.localStorage.setItem(DISPLAY_NAME_KEY, trimmed);
    } else {
      window.localStorage.removeItem(DISPLAY_NAME_KEY);
    }
  } catch {
    // ignore storage errors
  }
}

// ─── Main component ────────────────────────────────────────────────────────────

export interface SharedRoomCollaborationPanelProps {
  token: string;
  preview: PublicRoomPreview;
  initialReactionCounts: Record<string, ReactionCounts>;
}

export function SharedRoomCollaborationPanel({
  token,
  preview,
  initialReactionCounts,
}: SharedRoomCollaborationPanelProps) {
  const [joinStatus, setJoinStatus] = useState<JoinStatus>("preview");
  const [joinError, setJoinError] = useState<string | null>(null);
  const [client, setClient] = useState<SupabaseClient | null>(null);
  const [joinedRoomId, setJoinedRoomId] = useState<string | null>(null);
  const joinedRoomIdRef = useRef<string | null>(null);
  const currentUserIdRef = useRef<string | null>(null);

  const [messages, setMessages] = useState<RoomMessage[]>([]);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messagesError, setMessagesError] = useState<string | null>(null);

  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const [reactionCounts, setReactionCounts] = useState<Record<string, ReactionCounts>>(
    () => ({ ...initialReactionCounts })
  );
  const [selectedReactions, setSelectedReactions] = useState<Record<string, ReactionType | null>>({});
  const [mutatingReactionItemId, setMutatingReactionItemId] = useState<string | null>(null);

  const [displayName, setDisplayName] = useState<string>("");
  const [isEditingName, setIsEditingName] = useState(false);

  const messageCooldownRef = useRef<number>(0);
  const reactionCooldownRef = useRef<Record<string, number>>({});
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const itemIds = useMemo(
    () => preview.items.map((i) => i.id).filter((id): id is string => id !== null),
    [preview.items]
  );

  // Initialise display name from local storage on mount.
  useEffect(() => {
    setDisplayName(readDisplayName());
  }, []);

  // ── Session initialisation ─────────────────────────────────────────────────
  const initSession = useCallback(async () => {
    try {
      const supabase = getRoomsSupabaseBrowserClient();
      setClient(supabase);
    } catch {
      // Missing env config; leave in preview state so the user can retry explicitly.
      setJoinStatus("auth_error");
      setJoinError(AUTH_ERROR_COPY);
    }
  }, []);

  useEffect(() => {
    void initSession();
  }, [initSession]);

  // ── Join / access check ────────────────────────────────────────────────────
  const performJoin = useCallback(async (supabase?: SupabaseClient): Promise<boolean> => {
    const activeClient = supabase ?? client;
    if (!activeClient) return false;

    setJoinStatus("joining");
    setJoinError(null);

    try {
      const { data: sessionData } = await activeClient.auth.getSession();
      if (!sessionData.session) {
        const { error: signInError } = await activeClient.auth.signInAnonymously({
          options: {
            data: {
              source: "shared_room_web",
              kscan_web_guest: true,
              is_demo_guest: true,
            },
          },
        });
        if (signInError) {
          throw signInError;
        }
      }

      const { data, error } = await activeClient.rpc("join_room_via_share_token", {
        p_share_token: token,
      });

      if (error) {
        if (String(error.message).toLowerCase().includes("access limit")) {
          setJoinStatus("blocked");
          setJoinError(ACCESS_LIMIT_COPY);
          return false;
        }
        throw error;
      }

      if (!data) {
        throw new Error("Join returned no room.");
      }

      const joinedRoomIdValue = String(data);
      const { data: joinedSessionData } = await activeClient.auth.getSession();
      const joinedUserId = joinedSessionData.session?.user.id ?? null;

      joinedRoomIdRef.current = joinedRoomIdValue;
      currentUserIdRef.current = joinedUserId;
      setJoinedRoomId(joinedRoomIdValue);
      setJoinStatus("joined");
      return true;
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      const lower = message.toLowerCase();

      if (
        lower.includes("anonymous_provider_disabled") ||
        lower.includes("anonymous sign-ins are disabled")
      ) {
        setJoinStatus("auth_error");
        setJoinError(
          "Anonymous sign-ins are not enabled for this app. Please ask the team to enable them in Supabase Dashboard."
        );
        return false;
      }

      if (lower.includes("access limit")) {
        setJoinStatus("blocked");
        setJoinError(ACCESS_LIMIT_COPY);
        return false;
      }

      if (lower.includes("unavailable") || lower.includes("invalid") || lower.includes("42501")) {
        setJoinStatus("unavailable");
        setJoinError(UNAVAILABLE_COPY);
        return false;
      }

      setJoinStatus("auth_error");
      setJoinError(AUTH_ERROR_COPY);
      return false;
    }
  }, [client, token]);

  const handleJoinClick = useCallback(async () => {
    await performJoin();
  }, [performJoin]);

  // ── Polling helpers (declared early so message loaders can reference them) ───
  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
  }, []);

  // ── Messages ───────────────────────────────────────────────────────────────
  const loadMessages = useCallback(async (supabase?: SupabaseClient) => {
    const activeClient = supabase ?? client;
    if (!activeClient || joinStatus !== "joined" || !joinedRoomId) return;

    setMessagesLoading(true);
    setMessagesError(null);

    try {

      const { data, error } = await activeClient
        .from("dressing_room_messages")
        .select("id, room_id, sender_id, body, created_at")
        .eq("room_id", joinedRoomId)
        .is("deleted_at", null)
        .order("created_at", { ascending: true });

      if (error) {
        if (error.code === "42501" || error.code === "PGRST301") {
          setMessagesError("You no longer have access to this room.");
          stopPolling();
          return;
        }
        throw error;
      }

      setMessages((data ?? []) as RoomMessage[]);
    } catch {
      setMessagesError("We couldn't load messages. Please try again.");
    } finally {
      setMessagesLoading(false);
    }
  }, [client, joinStatus, joinedRoomId, stopPolling]);

  const handleSendMessage = useCallback(async () => {
    if (!client) return;

    const body = sanitizeMessageBody(draft);
    if (!body) {
      setSendError("Message cannot be empty.");
      return;
    }

    if (body.length > MESSAGE_MAX_LENGTH) {
      setSendError(`Messages must be ${MESSAGE_MAX_LENGTH} characters or fewer.`);
      return;
    }

    const now = Date.now();
    if (now < messageCooldownRef.current) {
      setSendError("Please wait a moment before sending another message.");
      return;
    }

    setSendError(null);
    setSending(true);

    try {
      // Ensure joined before sending.
      if (joinStatus !== "joined") {
        const joined = await performJoin(client);
        if (!joined) {
          setSending(false);
          return;
        }
      }

      const { data, error } = await client
        .from("dressing_room_messages")
        .insert({
          room_id: joinedRoomIdRef.current,
          sender_id: currentUserIdRef.current,
          body,
        })
        .select("id, room_id, sender_id, body, created_at")
        .single();

      if (error) {
        if (error.code === "42501" || error.code === "PGRST301") {
          throw new Error("You no longer have access to this room.");
        }
        throw new Error("We couldn't send that message. Please try again.");
      }

      setMessages((current) => [...current, data as RoomMessage]);
      setDraft("");
      messageCooldownRef.current = Date.now() + MESSAGE_COOLDOWN_MS;
      void loadMessages(client);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "We couldn't send that message.");
    } finally {
      setSending(false);
    }
  }, [client, draft, joinStatus, loadMessages, performJoin]);

  // ── Reactions ───────────────────────────────────────────────────────────────
  const loadReactionCounts = useCallback(async (supabase?: SupabaseClient) => {
    const activeClient = supabase ?? client;
    if (!activeClient || itemIds.length === 0) return;

    try {
      const { data, error } = await activeClient.rpc("get_item_reaction_counts", {
        p_item_ids: itemIds,
      });

      if (error) throw error;

      const next: Record<string, ReactionCounts> = {};
      for (const id of itemIds) {
        next[id] = emptyReactionCounts();
      }

      for (const row of (data ?? []) as Array<{
        item_id: string;
        reaction_type: string;
        count: number;
      }>) {
        const id = String(row.item_id ?? "").trim();
        if (!id || !next[id]) continue;
        const rt = row.reaction_type;
        if (rt === "like" || rt === "love" || rt === "looking" || rt === "thumbs_down") {
          next[id][rt] = Number(row.count) || 0;
        }
      }

      setReactionCounts(next);
    } catch {
      // Keep existing counts on error.
    }
  }, [client, itemIds]);

  const loadMyReactions = useCallback(async (supabase?: SupabaseClient) => {
    const activeClient = supabase ?? client;
    if (!activeClient || itemIds.length === 0 || joinStatus !== "joined") return;

    try {
      const { data: sessionData } = await activeClient.auth.getSession();
      const userId = sessionData.session?.user.id;
      if (!userId) return;

      const { data, error } = await activeClient
        .from("dressing_room_item_reactions")
        .select("item_id, reaction_type")
        .eq("user_id", userId)
        .in("item_id", itemIds);

      if (error) throw error;

      const next: Record<string, ReactionType | null> = {};
      for (const id of itemIds) next[id] = null;

      for (const row of (data ?? []) as Array<{ item_id: string; reaction_type: string }>) {
        const id = String(row.item_id ?? "").trim();
        if (!id || !isValidReactionType(row.reaction_type)) continue;
        next[id] = row.reaction_type as ReactionType;
      }

      setSelectedReactions(next);
    } catch {
      // ignore
    }
  }, [client, itemIds, joinStatus]);

  const handleReact = useCallback(
    async (itemId: string, reactionType: ReactionType) => {
      if (!client || mutatingReactionItemId === itemId) return;

      const now = Date.now();
      if (now < (reactionCooldownRef.current[itemId] ?? 0)) {
        return;
      }

      setMutatingReactionItemId(itemId);

      try {
        if (joinStatus !== "joined") {
          const joined = await performJoin(client);
          if (!joined) {
            setMutatingReactionItemId(null);
            return;
          }
        }

        const currentReaction = selectedReactions[itemId] ?? null;
        const { data: sessionData } = await client.auth.getSession();
        const userId = sessionData.session?.user.id;
        if (!userId) throw new Error("Session unavailable.");

        if (currentReaction === reactionType) {
          const { error } = await client
            .from("dressing_room_item_reactions")
            .delete()
            .eq("item_id", itemId)
            .eq("user_id", userId);
          if (error) throw error;
        } else {
          const { error } = await client
            .from("dressing_room_item_reactions")
            .upsert(
              { item_id: itemId, user_id: userId, reaction_type: reactionType },
              { onConflict: "item_id,user_id" }
            );
          if (error) throw error;
        }

        reactionCooldownRef.current[itemId] = Date.now() + REACTION_COOLDOWN_MS;
        await loadReactionCounts(client);
        await loadMyReactions(client);
      } catch {
        // Silent failure for reactions; counts refresh will reflect true state.
      } finally {
        setMutatingReactionItemId((current) => (current === itemId ? null : current));
      }
    },
    [client, joinStatus, loadMyReactions, loadReactionCounts, mutatingReactionItemId, performJoin, selectedReactions]
  );

  // ── Polling ─────────────────────────────────────────────────────────────────
  const startPolling = useCallback(() => {
    if (pollRef.current) return;
    pollRef.current = setInterval(() => {
      if (document.hidden) return;
      void loadMessages();
      void loadReactionCounts();
      void loadMyReactions();
    }, POLL_INTERVAL_MS);
  }, [loadMessages, loadReactionCounts, loadMyReactions]);

  // When join succeeds, load collaboration data and start polling.
  useEffect(() => {
    if (joinStatus === "joined" && client) {
      void loadMessages(client);
      void loadMyReactions(client);
      startPolling();
    }
    return () => stopPolling();
  }, [joinStatus, client, loadMessages, loadMyReactions, startPolling, stopPolling]);

  // Auto-scroll to bottom when messages change.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) return;
      if (joinStatus === "joined") {
        void loadMessages();
        void loadReactionCounts();
        void loadMyReactions();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [joinStatus, loadMessages, loadReactionCounts, loadMyReactions]);

  // ── Render helpers ──────────────────────────────────────────────────────────
  const canInteract = joinStatus === "joined";

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6924E]">
            Collaboration
          </p>
          <h2 className="mt-2 font-display text-[30px] leading-tight text-stone-950">
            Chat & reactions
          </h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Chat column */}
        <div className="rounded-[28px] border border-stone-200/80 bg-white p-5 shadow-[0_22px_52px_rgba(35,28,22,0.08)]">
          <JoinStateBanner
            status={joinStatus}
            error={joinError}
            onJoin={handleJoinClick}
            displayName={displayName}
            isEditingName={isEditingName}
            onStartEditName={() => setIsEditingName(true)}
            onCancelEditName={() => setIsEditingName(false)}
            onSaveDisplayName={(value) => {
              writeDisplayName(value);
              setDisplayName(value);
              setIsEditingName(false);
            }}
          />

          <div
            className="mt-5 max-h-[420px] overflow-y-auto rounded-[20px] border border-stone-100 bg-[#FAF8F5] p-4"
            aria-live="polite"
            aria-label="Room messages"
          >
            {messagesLoading && messages.length === 0 ? (
              <p className="py-8 text-center text-[14px] text-stone-500">Loading messages…</p>
            ) : messagesError ? (
              <div className="py-6 text-center">
                <p className="text-[14px] text-red-700">{messagesError}</p>
                <button
                  onClick={() => void loadMessages()}
                  className="mt-3 text-[13px] font-semibold text-[#B6924E] underline"
                  aria-label="Retry loading messages"
                >
                  Retry
                </button>
              </div>
            ) : messages.length === 0 ? (
              <p className="py-8 text-center text-[14px] text-stone-500">
                No messages yet. Start the conversation about this room.
              </p>
            ) : (
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className="rounded-[16px] border border-stone-100 bg-white p-4 shadow-sm"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B6924E]">
                        {message.sender_id === currentUserIdRef.current ? "You" : "Participant"}
                      </span>
                      <span className="text-[11px] text-stone-600">
                        {formatMessageTime(message.created_at)}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-stone-800">
                      {message.body}
                    </p>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="room-message-input" className="sr-only">
              Message input
            </label>
            <textarea
              id="room-message-input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={canInteract ? "Message about this room…" : "Join the conversation to send a message"}
              maxLength={MESSAGE_MAX_LENGTH}
              disabled={!canInteract || sending}
              className="min-h-[96px] w-full resize-none rounded-[16px] border border-stone-200 bg-[#FAF8F5] p-4 text-[15px] text-stone-800 placeholder:text-stone-600 focus:border-[#B6924E] focus:outline-none disabled:opacity-60"
              aria-label="Message composer"
            />
            <div className="mt-2 flex items-center justify-between">
              <span
                className={classNames(
                  "text-[12px]",
                  draft.trim().length > MESSAGE_MAX_LENGTH ? "text-red-600" : "text-stone-600"
                )}
              >
                {draft.trim().length}/{MESSAGE_MAX_LENGTH}
              </span>
              <button
                onClick={() => void handleSendMessage()}
                disabled={!canInteract || sending || draft.trim().length === 0}
                className={classNames(
                  "rounded-full px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors",
                  !canInteract || sending || draft.trim().length === 0
                    ? "cursor-not-allowed bg-stone-200 text-stone-500"
                    : "bg-[#C7A86B] text-stone-950 hover:bg-[#B6924E]"
                )}
                aria-label="Send message"
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </div>
            {sendError ? (
              <p className="mt-2 text-[13px] text-red-700">{sendError}</p>
            ) : null}
          </div>
        </div>

        {/* Reactions column */}
        <div className="space-y-5">
          {preview.items.length > 0 ? (
            preview.items.map((item, index) =>
              item.id ? (
                <ItemReactionCard
                  key={item.id}
                  item={item}
                  index={index}
                  counts={reactionCounts[item.id] ?? emptyReactionCounts()}
                  selected={selectedReactions[item.id] ?? null}
                  disabled={!canInteract || mutatingReactionItemId === item.id}
                  onReact={handleReact}
                />
              ) : null
            )
          ) : (
            <div className="rounded-[24px] border border-stone-200/80 bg-white p-6 shadow-[0_18px_36px_rgba(35,28,22,0.06)]">
              <p className="text-[14px] text-stone-500">Add items to this room to enable reactions.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
        <Link
          href="https://kscan.app/download"
          className="rounded-full border border-stone-200 bg-white px-8 py-4 text-center text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950"
          aria-label="Open in K Scan AI app"
        >
          Open in K Scan AI
        </Link>
        <Link
          href="/beta"
          className="rounded-full border border-stone-200 bg-white px-8 py-4 text-center text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950"
          aria-label="Join the K Scan AI beta"
        >
          Join the Beta
        </Link>
      </div>
    </section>
  );
}

// ─── Join state banner ─────────────────────────────────────────────────────────

interface JoinStateBannerProps {
  status: JoinStatus;
  error: string | null;
  onJoin: () => void;
  displayName: string;
  isEditingName: boolean;
  onStartEditName: () => void;
  onCancelEditName: () => void;
  onSaveDisplayName: (value: string) => void;
}

function JoinStateBanner({
  status,
  error,
  onJoin,
  displayName,
  isEditingName,
  onStartEditName,
  onCancelEditName,
  onSaveDisplayName,
}: JoinStateBannerProps) {
  const [editValue, setEditValue] = useState(displayName);

  if (status === "blocked") {
    return (
      <div className="rounded-[16px] border border-red-100 bg-red-50 p-4">
        <p className="text-[14px] font-medium text-red-800">{error ?? ACCESS_LIMIT_COPY}</p>
      </div>
    );
  }

  if (status === "unavailable") {
    return (
      <div className="rounded-[16px] border border-stone-200 bg-stone-50 p-4">
        <p className="text-[14px] font-medium text-stone-700">{error ?? UNAVAILABLE_COPY}</p>
      </div>
    );
  }

  if (status === "auth_error") {
    return (
      <div className="space-y-3">
        <div className="rounded-[16px] border border-red-100 bg-red-50 p-4">
          <p className="text-[14px] font-medium text-red-800">{error ?? AUTH_ERROR_COPY}</p>
        </div>
        <button
          onClick={onJoin}
          className="rounded-full bg-[#C7A86B] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-stone-950 transition-colors hover:bg-[#B6924E]"
          aria-label="Retry establishing session"
        >
          Retry
        </button>
      </div>
    );
  }

  if (status === "joined") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[16px] border border-stone-200 bg-[#FAF8F5] p-4">
        <div>
          <p className="text-[13px] font-semibold text-stone-800">You have joined the conversation.</p>
          <p className="text-[12px] text-stone-500">
            Your name is shown as{" "}
            <span className="font-medium text-stone-700">{displayName || "Guest"}</span> on this device.
          </p>
        </div>
        {isEditingName ? (
          <div className="flex items-center gap-2">
            <label htmlFor="display-name-input" className="sr-only">
              Display name
            </label>
            <input
              id="display-name-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              placeholder="Your name"
              maxLength={40}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-[13px] text-stone-800 focus:border-[#B6924E] focus:outline-none"
            />
            <button
              onClick={() => onSaveDisplayName(editValue)}
              className="text-[12px] font-semibold text-[#B6924E]"
              aria-label="Save display name"
            >
              Save
            </button>
            <button
              onClick={onCancelEditName}
              className="text-[12px] text-stone-500"
              aria-label="Cancel editing display name"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setEditValue(displayName);
              onStartEditName();
            }}
            className="text-[12px] font-semibold text-[#B6924E] underline"
            aria-label="Edit display name"
          >
            Edit name
          </button>
        )}
      </div>
    );
  }

  const joining = status === "joining";

  return (
    <div className="rounded-[16px] border border-stone-200 bg-[#FAF8F5] p-5">
      <p className="text-[15px] font-medium text-stone-800">Join the conversation</p>
      <p className="mt-1 text-[14px] text-stone-600">
        React to items and chat with the room owner and other participants. A new browser
        session counts as one redemption of this invite link.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          onClick={onJoin}
          disabled={joining}
          className={classNames(
            "rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors",
            joining
              ? "cursor-wait bg-stone-300 text-stone-600"
              : "bg-[#C7A86B] text-stone-950 hover:bg-[#B6924E]"
          )}
          aria-label="Join conversation"
        >
          {joining ? "Joining…" : "Join conversation"}
        </button>
      </div>
      {error ? <p className="mt-3 text-[13px] text-red-700">{error}</p> : null}
    </div>
  );
}

// ─── Item reaction card ────────────────────────────────────────────────────────

interface ItemReactionCardProps {
  item: PublicRoomPreviewItem;
  index: number;
  counts: ReactionCounts;
  selected: ReactionType | null;
  disabled: boolean;
  onReact: (itemId: string, reactionType: ReactionType) => void;
}

function ItemReactionCard({ item, index, counts, selected, disabled, onReact }: ItemReactionCardProps) {
  const label = item.title || item.category || `Item ${index + 1}`;

  return (
    <div className="rounded-[24px] border border-stone-200/80 bg-white p-4 shadow-[0_18px_36px_rgba(35,28,22,0.06)]">
      <p className="mb-3 text-[13px] font-semibold text-stone-800">{label}</p>
      <div className="flex flex-wrap gap-2">
        {ACTIVE_REACTIONS.map(({ type, emoji, label: reactionLabel }) => {
          const isSelected = selected === type;
          return (
            <button
              key={type}
              onClick={() => onReact(item.id!, type)}
              disabled={disabled}
              aria-label={`${reactionLabel} reaction, count ${counts[type]}${isSelected ? ", selected" : ""}`}
              aria-pressed={isSelected}
              className={classNames(
                "flex select-none items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors",
                isSelected
                  ? "border-[#B6924E] bg-[#F7F4EF] text-stone-900"
                  : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <span aria-hidden="true">{emoji}</span>
              <span>{counts[type]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
