import components from "./index";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import PreviewReferenceResolver from "../reference-resolver/preview";

export default function PreviewCustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  // Override defaults
  components.types = {
    ...components.types,
    reference: PreviewReferenceResolver,
  };

  return <PortableText value={value} components={components} />;
}
