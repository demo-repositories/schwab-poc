import PreviewDynamicCTA from "@/components/dynamic-cta/preview";
import PreviewBynderBlock from "@/components/bynder-block/preview";
import PreviewDataTable from "@/components/data-table/preview";

export default function PreviewReferenceResolver({ value }) {
  const { refType } = value;
  const type = refType[0];
  switch (type) {
    case "dynamicCta":
      return <PreviewDynamicCTA {...value} />;
    case "bynderBlock":
      return <PreviewBynderBlock {...value} />;
    case "dataTable":
      return <PreviewDataTable {...value} />;
    default:
      console.log("no component for this", value);
      return null;
  }
}
