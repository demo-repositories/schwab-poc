# Charles Schwab + Sanity proof of concept NextJS app

A single repository containing both the Sanity studio and NextJS front-end code. Both directories have their own README with more information about their respective setups.

## Running the project locally

Thus far I've been opening 2 side-by-side terminals in VSCode, then running `npm install` and `npm run dev` in both. Ensure you create a `.env` file in `/next` that matches `.env.EXAMPLE`, but includes a read token you create in your project API settings at [sanity.io/manage](https://sanity.io/manage).

## Project structure

The 4 directories that make up this project are:

```
.
├── .vscode
├── example-data
├── next
├── sanity
└── .nvmrc
```

The `/next` and `/sanity` directories each have their own `README` files that describe those projects more in depth.

### .vscode

A `settings.json` file for linting and formatting on save. Feel free to delete/modify to match the Schwab team's preferences.

### example-data

The JSON objects that were sent to us as examples of the content types being built

### next

A NextJS 14 app leveraging RSCs and wired up to the Sanity Content Lake

### sanity

The Sanity Studio for this POC.

### .nvmrc

Node version used to bootstrap project (18)
