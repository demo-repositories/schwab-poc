import { PortableText, PortableTextComponents } from "@portabletext/react";

/**
 * Custom portable text component used by components in /cards
 */

export default function CardDeckPortableText({ value }) {
  const components: PortableTextComponents = {
    marks: {
      sup: ({ children }) => <sup>{children}</sup>,
    },
    block: {
      sup: ({ children }) => <sup>{children}</sup>,
    },
  };
  return <PortableText value={value} components={components} />;
}
