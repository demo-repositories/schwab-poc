import { PropsWithChildren } from "react";
import { TRenderQuerySetProps } from "./types";
import Button from "@/components/button";
import SanityImage from "../sanity-image";
export default function RenderQuerySet({
  title,
  bottomCta,
  children,
  featuredContent,
}: PropsWithChildren<TRenderQuerySetProps>) {
  return (
    <section className="mx-auto max-w-7xl">
      {title && (
        <h2 className="mb-5 mt-7 text-2xl font-bold tracking-tight">{title}</h2>
      )}
      {featuredContent && (
        <div className="w-full lg:grid lg:grid-cols-2">
          <SanityImage value={{ ...featuredContent.featuredImage }} />
          <div className="text flex items-center justify-center">
            <div className="p-7">
              <strong className="block text-3xl font-extrabold">
                {featuredContent.title}
              </strong>
              <em className="text-slate-500 dark:text-slate-300">
                {new Date(featuredContent._updatedAt).toLocaleDateString()}
              </em>
              <p className="mb-3">{featuredContent.summary}</p>
              <Button
                to={{
                  _type: featuredContent._type,
                  slug: featuredContent.slug,
                }}
              >
                Read
              </Button>
            </div>
          </div>
        </div>
      )}
      {children}

      {bottomCta && (
        <div className="mt-9 flex justify-end">
          <Button {...bottomCta} />
        </div>
      )}
    </section>
  );
}
