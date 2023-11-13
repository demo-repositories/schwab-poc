import { PortableTextBlock } from "@portabletext/types";
import CustomPortableText from "./custom-portable-text";
import SanityImage, { TSanityImageProps } from "./sanity-image";

/**
 * Renders 'story' document type from Sanity.
 */

export type TStoryItem = {
  title: string;
  slug: string;
  summary: string;
  featuredImage: TSanityImageProps;
  content: PortableTextBlock[];
};
type TStoryProps = {
  data: TStoryItem[];
};

export const query = (slug: string) =>
  `*[_type == "story" && slug.current == '${slug}']{slug, title, summary, featuredImage{...}, content[]{..., button{..., "to":to->{slug, _type}}}, seoData{...,}}`;

export default function Story({ data }: TStoryProps) {
  const { title, slug, summary, featuredImage, content } = data[0];
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      <small className="text-schwab-blue text-lg font-semibold leading-7">
        Story
      </small>
      {title && <h1 className="text-4xl font-bold tracking-tight">{title}</h1>}
      {summary && <p className="mb-2 max-w-[66ch] text-lg italic">{summary}</p>}
      {featuredImage && (
        <div className="my-5">
          <SanityImage value={featuredImage} priority />
        </div>
      )}
      <CustomPortableText value={content} />
    </main>
  );
}
