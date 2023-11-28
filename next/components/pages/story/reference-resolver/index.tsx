import DynamicCTA from "@/components/dynamic-cta";

export default function ReferenceResolver({ value }) {
  const { refType } = value;
  const type = refType[0];
  switch (type) {
    case "dynamicCta":
      return <DynamicCTA {...value} />;
    default:
      console.log("no component for this", value);
      return null;
  }
}
