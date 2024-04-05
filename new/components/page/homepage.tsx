import Marquee from "@/components/marquee";
import { HOMEPAGE_QUERYResult } from "@/sanity/types";

export default function HomePage({ page }: { page: HOMEPAGE_QUERYResult }) {
  const { marquee } = page;
  return (
    <main className="mx-auto mb-12 mt-5 max-w-7xl px-5 xl:px-0">
      <Marquee {...marquee} />
    </main>
  );
}
