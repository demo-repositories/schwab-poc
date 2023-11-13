# Schwab Sanity Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

## Local development

You should be able to:

1. `cd sanity` from the project root
2. `npm install`
3. Open your studio at [http://localhost:3333/desk](http://localhost:3333/desk)

## Project structure

```
.
└── sanity/
    ├── components/
    │   ├── preview/
    │   │   └── PreviewDynamicCTA.tsx
    │   └── SchwabLogo.tsx
    ├── desk/
    │   ├── defaultDocumentNode.ts
    │   └── deskStructure.ts
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

#### preview

Components for rendering custom blocks in the portable text editor.

#### SchwabLogo.tsx

SVG ripped from the website, used as the workspace icon if we ever get into multiple workspaces

### desk

Customizations to the look and layout of the Sanity studio.

#### defaultDocumentNode.ts

Overrides how the document editing pane appears in the studio. Currently just adding the preview iframe pane to 'story' and 'landingPage' types.

#### deskStructure.ts

Overrides the default listing of items in the 'Content' tab of the studio.

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

If you follow the schema definition in `sanity.config.ts` back to the `schemas` directory, you'll see 2 directories (`documents`, and `objects`) and an `index.ts` file. The `index.ts` file is importing the `index.ts`` files from `documents`and`objects`, where the files present in those directories are exported in an array. As such the process for adding a new document/object is:

1. Determine if you should be creating a document or object and place the file in the appropriate directory
    - Documents can be thought of as an 'item' of content, meant to be either a page or a reusable piece of content that you want to reference in other documents.
    - Objects can be thought of as common configurations of fields that you want to be re-used, but do not require the creation of individual documents with that shape that can be referenced by other documents.
2. Import the new file into that directory's `index.ts` file.
3. Add the imported schema to the exported array.

That should be all you need to be able to reference your new schema!

## General Sanity docs and resources

-   [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
-   [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
-   [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
