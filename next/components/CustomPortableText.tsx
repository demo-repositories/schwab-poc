import { PortableText } from "@portabletext/react";
import DynamicCTA from "./DynamicCTA";
import SanityImage from "./SanityImage";

const components = {
  types: {
    image: SanityImage,
    dynamicCta: DynamicCTA,
  },
  block: {
    h1: ({ children }) => (
      <h2 className="heading peer mt-3 text-3xl font-extrabold tracking-tight">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="heading peer mt-3 text-2xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading peer text-xl font-bold tracking-tight">
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
};

export default function CustomPortableText({ value }) {
  return <PortableText value={value} components={components} />;
}
