# Littlemoor Sports and Social Club

Welcome to the Littlemoor Sports and Social Club website.

## Pre-requisites

-   Install git
-   Install NodeJS
-   Install GH CLI:
    -   `brew install gh`
    -   Run: `gh auth login` and login to GitHub

## Running Locally

Run the following:

-   `npm i`
-   `npm run start`
-   The application should be running on: http://localhost:5173

## Deploy to Github Pages

Run the following:

-   `npm i`
-   `npm run build-deploy`

There is also a GitHub action in `.github/workflows` that will automatically deploy the website when changes are pushed to the `main` branch.

Note: If the website isn't found then navigate to the Github repo settings and re-add the custom domain
