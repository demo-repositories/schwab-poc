import Link from "next/link";

/**
 * Pseudo-404 page for site
 */

export default function NotFound() {
  return (
    <section className="mx-auto mt-5 max-w-3xl px-5 xl:px-0">
      <h2 className="text-2xl font-bold tracking-tight">Not Found</h2>
      <p className="mb-5">Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </section>
  );
}
