import PortableTable from "../portable-table";
import BynderBlock from "@/components/bynder-block";
import StoryImage from "../story-image";
import ReferenceResolver from "../reference-resolver";
import { ReactNode } from "react";
import DynamicCTA from "@/components/dynamic-cta";
import DataTable from "@/components/data-table";
const BynderImage = ({ value }) => {
  return (
    <div className="my-12 flex items-center justify-center">
      <img src={value.previewImg} />
    </div>
  );
};
export const components = {
  // Custom block types require their own custom components
  types: {
    image: StoryImage,
    table: PortableTable,
    bynderBlock: BynderBlock,
    dynamicCta: DynamicCTA,
    dataTable: DataTable,
    "bynder.asset": BynderImage,
    reference: ReferenceResolver,
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
