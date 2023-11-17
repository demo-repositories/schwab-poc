import { TButtonProps } from "./button";
import { TTaxonomyItem } from "@/lib/sanity/types";
import Button from "./button";

export type TQuerySetProps = {
  taxonomyFilters: TTaxonomyItem[];
  contentTypes: string[];
  title: string;
  bottomCta: TButtonProps;
  querySetData: any;
  _type: "querySet";
};
export const querySetQuery = ({
  contentTypes,
  taxonomyFilters,
}: {
  contentTypes: string[];
  taxonomyFilters: TTaxonomyItem[];
}) => {
  const contentTypesString = () => {
    const isThereABetterWay = contentTypes.map((str) => `"${str}"`);
    return isThereABetterWay.join(", ");
  };
  return `*[_type in [${contentTypesString()}]]{slug, title, summary}`;
};
export default function QuerySet({
  taxonomyFilters,
  contentTypes,
  title,
  bottomCta,
  querySetData,
}: TQuerySetProps) {
  return (
    <section className="mx-auto max-w-7xl">
      {title && (
        <h2 className="mb-5 mt-7 text-2xl font-bold tracking-tight">{title}</h2>
      )}
      {bottomCta && <Button {...bottomCta} />}
    </section>
  );
}
