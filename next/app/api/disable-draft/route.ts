import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path");

  // Enable Draft Mode by removing the cookie
  draftMode().disable();

  if (!path) {
    return redirect("/");
  } else {
    return redirect(path);
  }
}
