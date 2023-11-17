import { PortableTextBlock } from "@portabletext/types";
import CustomPortableText from "./custom-portable-text";
import SanityImage, { TSanityImageProps } from "./sanity-image";
import { TSanitySEOData } from "@/lib/sanity/types";
/**
 * Renders 'story' document type from Sanity.
 */

export type TStoryItem = {
  title: string;
  slug: string;
  summary: string;
  featuredImage: TSanityImageProps;
  content: PortableTextBlock[];
  displayDate?: string;
  _id: string;
  _type: string;
  seoData: TSanitySEOData;
};
type TStoryProps = {
  data: TStoryItem[];
};

export const query = (slug: string) =>
  `*[_type == "story" && slug.current == '${slug}']{slug, title, summary, displayDate, _id, _type, featuredImage{...}, content[]{..., button{..., "to":to->{slug, _type}}}, seoData{...,}}`;

export default function Story({ data }: TStoryProps) {
  const {
    title,
    slug,
    summary,
    featuredImage,
    content,
    displayDate,
    _id,
    _type,
  } = data[0];
  const dateString = displayDate
    ? new Date(displayDate).toLocaleDateString("en-US", {
        timeZone: "UTC",
      })
    : null;
  return (
    <main
      className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0"
      data-sanity={JSON.stringify({ _id, _type })}
    >
      <small className="text-lg font-semibold leading-7 text-schwab-blue">
        Story
      </small>
      <div className="header-text flex justify-between">
        <div>
          {title && (
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          )}
          {summary && (
            <p className="mb-2 max-w-[66ch] text-lg italic">{summary}</p>
          )}
        </div>
        {displayDate && <div className="font-bold">{dateString}</div>}
      </div>
      {featuredImage && (
        <div className="my-5">
          <SanityImage value={featuredImage} priority />
        </div>
      )}
      <CustomPortableText value={content} />
    </main>
  );
}
