import { ISanityLandingPageDocument } from "@/components/pages/landing-page";
import { ISanityStoryDocument } from "@/components/pages/story";
import DocumentCards from "@/components/document-cards";

export type TResult = ISanityStoryDocument | ISanityLandingPageDocument;
type TRenderResultsProps = {
  results: TResult[];
  taxonomyFilters: any[];
};

export default function RenderResults({
  results,
  taxonomyFilters,
}: TRenderResultsProps) {
  function filterByTaxonomy() {
    // Get IDs of attributes
    const attributes = taxonomyFilters.map(
      (filter) => filter.taxonomyAttribute._id,
    );
    // Filter results to only have matching attributes to our filters
    const matchesAttribute = results.filter((result) => {
      if (result?.taxonomy) {
        // get ids for each taxonomyAttribute
        const resultAttr = result.taxonomy.map(
          (item) => item.taxonomyAttribute._ref,
        );
        for (let i = 0; i < resultAttr.length; i++) {
          if (attributes.includes(resultAttr[i])) {
            return true;
          }
        }
      }
    });
    // Copy our initial attribute array to filter through
    let matchesTerm = matchesAttribute;
    // Loop through all filters
    for (let i = 0; i < taxonomyFilters.length; i++) {
      // re-set matchesTerm with each filter
      matchesTerm = matchesTerm.filter((result) => {
        // Get IDs for this filter's attribute and terms
        const attrID = taxonomyFilters[i].taxonomyAttribute._id;
        const termIDs = taxonomyFilters[i].terms.map(({ _id }) => _id);

        // Get the specific taxonomy item that matches our filter's attribute
        const taxonomyItem = result.taxonomy.filter(
          (item) => item.taxonomyAttribute._ref == attrID,
        )[0];
        // There are no terms set for this document
        if (!taxonomyItem.terms) return false;
        // Simplify shape of taxonomy item's terms to make filtering easier
        const itemTermIds = taxonomyItem.terms.map((term) => term._ref);
        // If ANY term matches for the attribute, we consider it a match
        for (let j = 0; j < termIDs.length; j++) {
          if (itemTermIds.includes(termIDs[j])) {
            return true;
          }
        }
      });
    }
    return matchesTerm;
  }
  return (
    <DocumentCards cards={taxonomyFilters ? filterByTaxonomy() : results} />
  );
}
