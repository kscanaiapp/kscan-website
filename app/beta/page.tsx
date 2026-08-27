import { permanentRedirect } from "next/navigation";

export default function BetaRedirectPage() {
  permanentRedirect("/test-center");
}
