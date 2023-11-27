import { PropsWithChildren } from "react";
import { TRenderQuerySetProps } from "./types";
import Button from "@/components/button";
export default function RenderQuerySet({
  taxonomyFilters,
  contentTypes,
  title,
  bottomCta,
  querySetData,
  children,
}: PropsWithChildren<TRenderQuerySetProps>) {
  //   console.log("contentTypes", contentTypes);
  return (
    <section className="mx-auto max-w-7xl">
      {title && (
        <h2 className="mb-5 mt-7 text-2xl font-bold tracking-tight">{title}</h2>
      )}
      {children}
      {bottomCta && <Button {...bottomCta} />}
    </section>
  );
}
