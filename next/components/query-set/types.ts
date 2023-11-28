import { TTaxonomyItem } from "@/lib/sanity/types";
import { TButtonProps } from "../button";
import { ISanityStoryDocument } from "@/components/pages/story";
import { ISanityLandingPageDocument } from "@/components/pages/landing-page";

export type TRenderQuerySetProps = {
  taxonomyFilters: TTaxonomyItem[];
  contentTypes: string[];
  title: string;
  bottomCta: TButtonProps;
  querySetData: any;
  featuredContent: ISanityStoryDocument | ISanityLandingPageDocument;
  _type: "querySet";
};
