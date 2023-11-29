import DynamicCTA from "@/components/dynamic-cta";
import BynderBlock from "@/components/bynder-block";

export default function ReferenceResolver({ value }) {
  const { refType } = value;
  const type = refType[0];
  switch (type) {
    case "dynamicCta":
      return <DynamicCTA {...value} />;
    case "bynderBlock":
      return <BynderBlock {...value} />;
    default:
      console.log("no component for this", value);
      return null;
  }
}
