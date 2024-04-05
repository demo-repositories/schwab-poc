import { draftMode } from "next/headers";
import "@/app/(site)/globals.css";
import { Inter as FontSans } from "next/font/google";
import LiveVisualEditing from "@/components/layout/live-visual-editing";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
      </body>
    </html>
  );
}
