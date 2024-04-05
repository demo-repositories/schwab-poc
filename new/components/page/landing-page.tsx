import { LANDING_PAGE_QUERYResult } from "@/sanity/types";
import ComponentLookup from "./component-lookup";

/**
 * Recreation of 'Pattern Landing Page' from original charlesschwab.com.
 *
 * Maps to 'landingPage' document type in Sanity.
 */

export default function LandingPage({
  page,
}: {
  page: LANDING_PAGE_QUERYResult;
}) {
  return (
    <LandingPageLayout>
      {page?.components ? (
        <ComponentLookup components={page.components} />
      ) : (
        <>No components</>
      )}
    </LandingPageLayout>
  );
}

// Over-arching classes for wrapping <main>, used here and in landing-page-preview.tsx
export function LandingPageLayout({ children }) {
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      {children}
    </main>
  );
}
