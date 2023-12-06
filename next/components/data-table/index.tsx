import { loadQuery } from "@/lib/sanity/store";
import query from "./query";
import { ISanityDocument } from "@/lib/sanity/types";
import RenderDataTable from "./component";
/**
 * Maps to the 'dataTable' object type in Sanity.
 *
 * Gets pulled into 'CustomPortableText'
 */

// Params for query
type TParams = {
  _id: string;
};
export interface ISanityDataTableDocument extends ISanityDocument {
  heading: string;
  tableType: string;
  tickers: string[];
  columnHeaders: string[];
}
const componentData = async (params: TParams) =>
  await loadQuery<ISanityDataTableDocument>(query, params);

export default async function DataTable({ _ref }: { _ref: string }) {
  const params = { _id: _ref };
  const initial = await componentData(params);

  return <RenderDataTable {...initial.data} />;
}
