import { PageParams } from "@/components/pages/types";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import ComponentPreview from "@/components/pages/component-preview";

export default function ComponentPreviewPage({ params }: PageParams) {
  if (!draftMode().isEnabled) {
    notFound();
  }

  return <ComponentPreview params={params} />;
}
