import RenderCardDeck, { query, TCardDeckProps } from "./render";
import { loadQuery } from "@/lib/sanity/store";
import dynamic from "next/dynamic";

const CardDeckPreview = dynamic(() => import("@/components/card-deck/preview"));

const componentData = async (_id: string) =>
  await loadQuery<TCardDeckProps>(query(_id));

export default async function CardDeck(props) {
  const { _ref, draftMode } = props;
  const initial = await componentData(_ref);
  if (draftMode) {
    return <CardDeckPreview _id={_ref} initial={initial} />;
  }
  return <RenderCardDeck {...initial.data[0]} />;
}
