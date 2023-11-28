import PreviewDynamicCTA from "@/components/dynamic-cta/preview";

export default function PreviewReferenceResolver({ value }) {
  const { refType } = value;
  const type = refType[0];
  switch (type) {
    case "dynamicCta":
      return <PreviewDynamicCTA {...value} />;
    default:
      console.log("no component for this", value);
      return null;
  }
}
