import Marquee from "../marquee";
import CardDeck from "../card-deck";

export default function ComponentLookup({ components }) {
  return (
    <>
      {components &&
        components.map((component, i) => {
          switch (component.refType[0] || component._type) {
            case "marquee":
              return <Marquee key={component._key} {...component} />;
            case "cardDeck":
              return <CardDeck key={component._key} {...component} />;
            // case "querySet":
            //   return <QuerySet key={component._key} {...component} />;
            default:
              return <div key={`no-component-${i}`}>no component</div>;
          }
        })}
    </>
  );
}
