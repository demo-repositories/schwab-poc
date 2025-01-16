# Schwab Sanity Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

# TODO

-   Taxonomy manager add to schwab demo

## Local development

You should be able to:

1. `cd sanity` from the project root
2. Create a `.env` file with the appropriate values if you haven't already
3. `npm install`
4. Open your studio at [http://localhost:3333/structure](http://localhost:3333/structure)

## Project structure

```
.
└── sanity/
    ├── components/
    │   ├── inputs/
    │   │   ├── card-type.tsx
    │   │   ├── parent-attributes.tsx
    │   │   └── ticker-search.tsx
    │   ├── preview/
    │   │   └── Sup.tsx
    │   └── schwab-logo.tsx
    ├── data/
    │   └── stock-tickers.json
    ├── desk/
    │   ├── defaultDocumentNode.ts
    │   └── deskStructure.ts
    ├── presentation/
    │   └── locate.ts
    ├── schemas/
    │   ├── documents/
    │   │   └── ...
    │   ├── objects/
    │   │   └── ...
    │   └── index.ts
    ├── sanity.cli.ts
    └── sanity.config.ts
```

### components

#### inputs

Custom inputs for certain fields in the Studio

#### preview

Components for rendering custom blocks in the portable text editor.

#### schwab-logo.tsx

SVG ripped from the website

### desk

Customizations to the look and layout of the Sanity studio.

#### defaultDocumentNode.ts

Overrides how the document editing pane appears in the studio. Adds the "Smartling" tab to the document editor.

#### deskStructure.ts

Overrides the default listing of items in the 'Content' tab of the studio.

### presentation

Customizations for the new 'Presentation' tool.

#### locate.ts

Logic for resolving where documents appear on the front-end

### schemas

Definitions of the documents and objects that make up your dataset. Schema docs can be found [here](https://www.sanity.io/docs/schema-types).

#### documents

The most top-level 'item' in Sanity. If you need something to be referenced it should be a document.

#### objects

Common configurations of fields to be reused as needed through multiple content types.

### sanity.cli.ts

Minimal CLI config for wherever that info may need to be reused. More info about the CLI can be found [here](https://www.sanity.io/docs/cli).

### sanity.config.ts

Main entrypoint for all the settings and customizations in your studio. Learn more [here](https://www.sanity.io/docs/configuration)

## Adding a new document or object type

If you follow the schema definition in `sanity.config.ts` back to the `schemas` directory, you'll see 2 directories (`documents`, and `objects`) and an `index.ts` file. The `index.ts` file is importing the `index.ts` files from `documents` and `objects`, where the files present in those directories are exported in an array. As such the process for adding a new document/object is:

1. Determine if you should be creating a document or object and place the file in the appropriate directory
    - Documents can be thought of as an 'item' of content, meant to be either a page or a reusable piece of content that you want to reference in other documents.
    - Objects can be thought of as common configurations of fields that you want to be re-used, but do not require the creation of individual documents with that shape that can be referenced by other documents.
2. Import the new file into that directory's `index.ts` file.
3. Add the imported schema to the exported array.

That should be all you need to be able to reference your new schema!

## Lucide icons

For content icons in the studio you can pass any React component. Sanity exposes a large set of built-in icon components you can view [here](https://icons.sanity.build/all), but this workspace also has [Lucide icons](https://lucide.dev/icons/) installed to supplement the options from `@sanity/icons`.

## General Sanity docs and resources

-   [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
-   [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
-   [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
