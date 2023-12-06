// route handler with secret and slug
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { validatePreviewUrl } from "@sanity/preview-url-secret";
import { client } from "@/lib/sanity/client";

const clientWithToken = client.withConfig({
  // Required, otherwise the URL preview secret can't be validated
  token: process.env.SANITY_API_READ_TOKEN,
});
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  if (path) {
    draftMode().enable();
    redirect(decodeURIComponent(path));
  }
  const { isValid, redirectTo = "/" } = await validatePreviewUrl(
    clientWithToken,
    req.url,
  );
  if (!isValid) {
    return new Response("Invalid secret", { status: 401 });
  }

  draftMode().enable();

  redirect(redirectTo);
}
