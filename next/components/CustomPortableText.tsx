import { PortableText } from "@portabletext/react";
import DynamicCTA from "./DynamicCTA";
import SanityImage from "./SanityImage";
import PortableTable from "./PortableTable";
import BynderBlock from "./BynderBlock";

const components = {
  types: {
    image: SanityImage,
    dynamicCta: DynamicCTA,
    table: PortableTable,
    bynderBlock: BynderBlock,
  },
  block: {
    // Force H1 to an H2 with larger sizing to avoid creating 2 H1s w/Title
    h1: ({ children }) => (
      <h2 className="heading peer mb-2 mt-5 text-3xl font-extrabold tracking-tight">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="heading peer mb-1 mt-7 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading peer mt-5 text-xl font-bold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h1 className="heading peer text-lg font-bold tracking-tight">
        {children}
      </h1>
    ),
    h5: ({ children }) => (
      <h1 className="heading peer text-lg tracking-tight">{children}</h1>
    ),
    h6: ({ children }) => (
      <h1 className="heading peer text-lg tracking-tight">{children}</h1>
    ),
    normal: ({ children }) => (
      <p className="my-3 peer-[.heading]:mt-1">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-inside list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal">{children}</ol>
    ),
  },
};

export default function CustomPortableText({ value }) {
  return <PortableText value={value} components={components} />;
}
