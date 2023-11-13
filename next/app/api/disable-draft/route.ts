import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  // Enable Draft Mode by removing the cookie
  draftMode().disable();

  if (!path) {
    return new Response(
      "Draft mode is disabled, but no redirect path specified",
    );
  } else {
    return redirect(path);
  }
}
