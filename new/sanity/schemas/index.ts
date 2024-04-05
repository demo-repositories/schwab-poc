import { storyType } from "./documents/story";
import { landingPageType } from "./documents/landing-page";
import { cardDeckType } from "./documents/card-deck";
import { querySetType } from "./documents/query-set";
import { dynamicCtaType } from "./documents/dynamic-cta";
import { bynderBlockType } from "./documents/bynder-block";
import { dataTableType } from "./documents/data-table";
import { redirectType } from "./documents/redirect";
import { buttonType } from "./objects/button";
import { seoItemType } from "./objects/seo-item";
import { seoDataType } from "./objects/seo-data";
import { taxonomyItemType } from "./objects/taxonomy-item";
import { marqueeType } from "./objects/marquee";
import { taxonomyAttributeType } from "./documents/taxonomy-attribute";
import { taxonomyTermType } from "./documents/taxonomy-term";

export const schema = {
  types: [
    storyType,
    landingPageType,
    cardDeckType,
    querySetType,
    dynamicCtaType,
    bynderBlockType,
    dataTableType,
    redirectType,
    buttonType,
    seoDataType,
    seoItemType,
    marqueeType,
    taxonomyItemType,
    taxonomyAttributeType,
    taxonomyTermType,
  ],
};
