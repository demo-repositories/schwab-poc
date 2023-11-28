import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { components } from "./components";
/**
 * Renders the output of the portable text block in Sanity's 'story' type.
 *
 * Appears in 'Story'
 */

export default function CustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
