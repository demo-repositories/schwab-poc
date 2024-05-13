import query from "./query";
import { ISanityDocument } from "@/lib/sanity/types";
import RenderDataTable from "./component";
import { sanityFetch } from "@/lib/sanity/fetch";
/**
 * Maps to the 'dataTable' object type in Sanity, gets pulled into 'CustomPortableText'
 */

export interface ISanityDataTableDocument extends ISanityDocument {
  tableType: string;
  tickers: string[];
  columnHeaders: string[];
}

export default async function DataTable(props: { _ref: string }) {
  const params = { _id: props._ref };
  const data = await sanityFetch<ISanityDataTableDocument>({ query, params });

  return <RenderDataTable {...data} />;
}
