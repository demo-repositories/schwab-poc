/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { schema } from "@/sanity/schemas";
import { structure } from "@/sanity/structure";
import { assist } from "@sanity/assist";
import { table } from "@sanity/table";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { bynderInputPlugin } from "sanity-plugin-bynder-input";
import { structureTool } from "sanity/structure";
import SchwabLogo from "./sanity/components/SchwabLogo";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { taxonomyManager } from "sanity-plugin-taxonomy-manager";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  basePath: "/studio",
  icon: SchwabLogo,
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      // Customizes document lists in /structure tool
      structure,
    }),
    // Live visual editing
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    table(),
    // Get images from unsplash
    unsplashImageAsset(),
    // Access Bynder from Studio
    bynderInputPlugin({
      portalDomain:
        process.env.BYNDER_PORTAL_DOMAIN || "https://wave-trial.getbynder.com/",
    }),
    // AI assist
    assist(),
    // Taxonomy tool + document types
    taxonomyManager({ baseUri: "https://www.schwab.com/vocab/" }), // TODO - This baseUri is a placeholder, it does not exist
  ],
});
