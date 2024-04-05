import Marquee from "../marquee";
import PreviewCardDeck from "../card-deck/preview";

export default function ComponentLookupPreview({ components }) {
  return (
    <>
      {components &&
        components.map((component, i) => {
          switch (component.refType[0] || component._type) {
            case "marquee":
              return <Marquee key={component._key} {...component} />;
            case "cardDeck":
              return (
                <PreviewCardDeck key={component._key} initial={...component} />
              );
            // case "querySet":
            //   return <QuerySet key={component._key} {...component} />;
            default:
              return <div key={`no-component-${i}`}>no component</div>;
          }
        })}
    </>
  );
}
