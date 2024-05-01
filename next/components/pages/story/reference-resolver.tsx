import DynamicCTA from "@/components/dynamic-cta";
import BynderBlock from "@/components/bynder-block";
import DataTable from "@/components/data-table";

export default function ReferenceResolver({ value }) {
  const { refType } = value;
  const type = refType[0];
  switch (type) {
    case "dynamicCta":
      return <DynamicCTA {...value} />;
    case "bynderBlock":
      return <BynderBlock {...value} />;
    case "dataTable":
      return <DataTable {...value} />;
    default:
      console.log("no component for this", value);
      return null;
  }
}
