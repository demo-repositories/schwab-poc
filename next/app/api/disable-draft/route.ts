import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  draftMode().disable();

  if (!path) {
    return new Response(
      "Draft mode is disabled, but no redirect path specified",
    );
  } else {
    redirect(path);
  }
}
