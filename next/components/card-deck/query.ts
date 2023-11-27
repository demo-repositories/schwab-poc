import { groq } from "next-sanity";
export default groq`*[_type == "cardDeck" && _id == $_id]{...,}`;
