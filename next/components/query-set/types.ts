import { ITaxonomyItem } from "@/lib/sanity/types";
import { TButtonProps } from "../button";
import { ISanityStoryDocument } from "@/components/pages/story";
import { ISanityLandingPageDocument } from "@/components/pages/landing-page";
import { SanityDocument } from "next-sanity";

export interface IRenderQuerySetProps extends SanityDocument {
  taxonomyFilters: ITaxonomyItem[];
  contentTypes: string[];
  title: string;
  bottomCta: TButtonProps;
  querySetData: any;
  featuredContent: ISanityStoryDocument | ISanityLandingPageDocument;
}
