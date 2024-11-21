# Littlemoor Sports and Social Club

<!-- TODO might want to create a sanity test to check it loads before committing to main -->
<!-- Turn on protection to main branch? -->
<!-- how to create a PR? -->

Welcome to the Littlemoor Sports and Social Club website.

# How to update the website

To update the website, you will need the following:

-   A [GitHub account](https://github.com/signup)
-   Write access to the GitHub repository (contact an existing admin to request this)
-   Optional: A code editor e.g. Visual Studio Code. This is only required for more advanced changes.

# Updating the News Section

Ensure you are logged into GitHub and have write access to the repository (see above for details on how to do this).

You can then change the news item via the GitHub UI by following the below steps:

1. Navigate to the `src/clubNews` directory in the repository.
2. Click on the `news.json` file.
3. Click on the pencil icon in the top right corner to edit the file.
4. Update the news item as required.
5. click the `Commit changes` button to save the changes.
6. Optional: to change the images associated with the news item, upload the new image to the `src/clubNews` directory, keeping the same file name as the original image.

#### Additional information

The news items will appear in the order they are in the `news.json` file.

-   Title - The title of the news item
-   openingText - the first line of the news item
-   mainText - the main body of the news item
-   image - the file name of the image to display with the news item

The images can be updated but they need to be named exactly the same as they already are in the `src/clubNews` directory. The images will be associated with the news item based on the order they are in the `news.json` file i.e. the first news item in the JSON file 1 will have image 1, the second news item will have image 2 etc.

# Running the website locally

It is possible to run the website locally to see how changes will look before deploying them.

## Pre-requisites

Install:

-   git
-   NodeJS

Check the GitHub repository's setup:

-   `settings/actions` - grant Workflow permissions read/write access, and optionally allow GH Actions to create PRs.
-   `settings/pages` - add the custom domain here.
-   Turn on protection to main branch to prevent direct commits.

## Running Locally

To run the app locally, run the following on the command line:

-   `npm i`
-   `npm run start`

The application should be running on: http://localhost:5173

## Deploy to Github Pages

You should use the pipeline to deploy to production. When you merge your PR to main the pipeline will automatically deploy.

However, if you need to deploy from your local machine, you can run the following on the command line:

-   `npm i`
-   `npm run build-deploy`

There is also a GitHub action in `.github/workflows` that will automatically deploy the website when changes are pushed to the `main` branch.
