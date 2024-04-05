// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "landingPage" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "landingPage" && slug.current == $slug][0]`;
export const HOMEPAGE_QUERY = groq`*[_type == 'landingPage' && slug.current == 'home'][0]{"marquee":components[_type=='marquee'][0]{...,image{...,"palette": asset->metadata.palette}}}`;
export const LANDING_PAGE_QUERY = groq`*[_type == "landingPage" && slug.current == $slug][0]{slug, title, summary, _id, _type, _key, seoData{...,}, components[]{..., _ref, _id, _type, image{...,"palette": asset->metadata.palette},"refType":*[_id==^._ref]._type}, taxonomy[]{...,taxonomyAttribute->{name}, terms[]->{name, _id}}}`;
export const CARD_DECK_QUERY = groq`*[_type == "cardDeck" && _id == $_id][0]{...,}`;
