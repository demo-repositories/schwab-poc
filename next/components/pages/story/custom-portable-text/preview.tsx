import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import PreviewReferenceResolver from "../reference-resolver/preview";
import { components } from "./components";
export default function PreviewCustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  if (components.types && components.types.reference) {
    components.types.reference = PreviewReferenceResolver;
  }
  return <PortableText value={value} components={{ ...components }} />;
}
