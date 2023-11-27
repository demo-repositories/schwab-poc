import { TTaxonomyItem } from "@/lib/sanity/types";
import { TButtonProps } from "../button";
import { ISanityStoryDocument } from "../story";
import { ISanityLandingPageDocument } from "../landing-page";

export type TRenderQuerySetProps = {
  taxonomyFilters: TTaxonomyItem[];
  contentTypes: string[];
  title: string;
  bottomCta: TButtonProps;
  querySetData: any;
  featuredContent: ISanityStoryDocument | ISanityLandingPageDocument;
  _type: "querySet";
};
