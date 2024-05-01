"use client";
import { useRef, useLayoutEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
/**
 * A more global way to target GSAP. See components/button.tsx for a more component-level example
 */
export default function GSAPProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const wrapperRef = useRef();
  useLayoutEffect(() => {
    // Only animate on certain paths
    const animatedPaths = ["/landing-pages", "/story", "/"];
    if (animatedPaths.indexOf(pathname) == -1) return;
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      // Our animations can use selector text like ".fade-in" for you to apply anywhere, or target more specific classes
      gsap.to(".fade-in", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
        ease: "power1.inOut",
      });
    }, wrapperRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [pathname]); // <- this layouteffect is happening with EVERY ROUTE CHANGE
  return <div ref={wrapperRef}>{children}</div>;
}
