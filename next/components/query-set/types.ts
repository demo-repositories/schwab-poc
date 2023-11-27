import { TTaxonomyItem } from "@/lib/sanity/types";
import { TButtonProps } from "../button";

export type TRenderQuerySetProps = {
  taxonomyFilters: TTaxonomyItem[];
  contentTypes: string[];
  title: string;
  bottomCta: TButtonProps;
  querySetData: any;
  _type: "querySet";
};
