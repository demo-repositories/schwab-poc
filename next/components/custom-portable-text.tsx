import { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import DynamicCTA from "./dynamic-cta";
import SanityImage from "./sanity-image";
import PortableTable from "./portable-table";
import BynderBlock from "./bynder-block";
/**
 * Renders the output of the portable text block in Sanity's 'story' type.
 *
 * Appears in 'Story'
 */
const components = {
  // Custom block types require their own custom components
  types: {
    image: SanityImage,
    dynamicCta: DynamicCTA,
    table: PortableTable,
    bynderBlock: BynderBlock,
  },
  // Wrap normal elements with Tailwind classes for styling
  block: {
    // Force H1 to an H2 with larger sizing to avoid creating 2 H1s w/Title
    h1: ({ children }: { children: ReactNode }) => (
      <h2 className="heading peer mb-2 mt-5 text-3xl font-extrabold tracking-tight">
        {children}
      </h2>
    ),
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="heading peer mb-1 mt-7 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="heading peer mt-5 text-xl font-bold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }: { children: ReactNode }) => (
      <h1 className="heading peer text-lg font-bold tracking-tight">
        {children}
      </h1>
    ),
    h5: ({ children }: { children: ReactNode }) => (
      <h1 className="heading peer text-lg tracking-tight">{children}</h1>
    ),
    h6: ({ children }: { children: ReactNode }) => (
      <h1 className="heading peer text-lg tracking-tight">{children}</h1>
    ),
    normal: ({ children }: { children: ReactNode }) => (
      <p className="my-3 peer-[.heading]:mt-1">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => (
      <ul className="list-inside list-disc">{children}</ul>
    ),
    number: ({ children }: { children: ReactNode }) => (
      <ol className="list-inside list-decimal">{children}</ol>
    ),
  },
};

export default function CustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
