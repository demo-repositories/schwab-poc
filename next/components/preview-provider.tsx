"use client";

import dynamic from "next/dynamic";
import { suspend } from "suspend-react";
/**
 * Sanity's preview provider, provides a way to refresh data as it changes in Sanity
 *
 * Shows up in app/layout.tsx
 */
const LiveQueryProvider = dynamic(() => import("next-sanity/preview"));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol("@/lib/sanity/client");

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) {
  const { client } = suspend(() => import("@/lib/sanity/client"), [UniqueKey]);
  if (!token) throw new TypeError("Missing token");
  return (
    <LiveQueryProvider client={client} token={token} logger={console}>
      {children}
    </LiveQueryProvider>
  );
}