# Littlemoor Sports and Social Club

Welcome to the Littlemoor Sports and Social Club website.

## Setting up your development environment

### Pre-requisites

Install:

-   git
-   NodeJS

To update the website, you will need the following:

-   A [GitHub account](https://github.com/signup)
-   Write access to the GitHub repository (contact an existing admin to request this)
-   A code editor e.g. Visual Studio Code

### Running the website locally

It is possible to run the website locally to see how changes will look before deploying them.

Run the following on the command line:

-   `npm i`
-   `npm run start`

Visit http://localhost:5173 in your browser to see the website.

### Running the tests

The tests can be triggered by running the following on the command line:

-   `npm i`
-   `npm run test`

### Deploying the website

The pipeline automatically deploys any changes to the main branch to production. When you merge your PR to main the pipeline will automatically deploy.

The config for this GitHub action can be found in the in `.github/workflows`.

## Updating the website content

Below is information on how to update the content of the website by using pull requests (PRs) in GitHub.

## Adding news stories

You can change the news item by following the below steps:

1. Navigate to the `src` directory in the repository.
2. Open the `news.json` file.
3. Make changes to the file as required.
4. Commit the changes.
5. Optional: to change the images associated with the news item, upload the new image to the `src/images/news` directory, keeping the same file name as the original image.

#### Additional information

The news items will appear in the order they are in the `news.json` file.

-   `title` - The title of the news item
-   `openingText` - the first line of the news item
-   `mainText` - the main body of the news item

The images can be updated but they need to be named exactly the same as they already are in the `src/images/news` directory. The images will be associated with the news item based on the order they are in the `news.json` file i.e. the first news item in the JSON file 1 will use `news-image1.png`, the second news item will use `news-image2.png` etc.

### Creating Pull Requests (PRs) in GitHub

To make changes to the repository, you will need to clone the repo locally and create a pull request.

1. **Clone the repository**: Clone the forked repository to your local machine using the command:
    ```sh
    git clone https://github.com/your-username/littlemoor-website.git
    ```
2. **Create a new branch**: Navigate to the repository directory and create a new branch for your changes:
    ```sh
    git checkout -b your-branch-name
    ```
3. **Make your changes**: Make the necessary changes to the codebase.
4. **Commit your changes**: Stage and commit your changes with a meaningful commit message:
    ```sh
    git add .
    git commit -m "Description of the changes"
    ```
5. **Push your changes**: Push the changes to your forked repository:
    ```sh
    git push origin your-branch-name
    ```
6. **Create a pull request**: Go to the original repository on GitHub, and you should see a prompt to create a pull request from your recently pushed branch. Click "Compare & pull request".
7. **Submit the pull request**: Provide a title and description for your pull request, then click "Create pull request".

8. **Merge the pull request**: Once the pull request has been reviewed and merged, the changes will be automatically deployed to the website.

# Using the repo as a template

### GitHub repo settings

Check the GitHub repository's setup:

-   Make the repo public
-   `settings/actions` - grant Workflow permissions read/write access, and optionally allow GH Actions to create PRs
-   `settings/pages` - add the custom domain here
-   Turn on protection to main branch to prevent direct commits

### Styles

Update `background-color` and `color` in `src/app.css` and anywhere else in the code where the colour is used e.g. `teamInfo.tsx`.

Update the `font-family` in `src/app.css`. Also load the font family in `app.tsx`

Check the styling looks sensible for each page after changes have been finalised.

### Domain

Update `public` folder:

-   CNAME
-   favicon.ico
-   short_name and name in `manifest.json`

title (x2), description, url, image in `index.html`

If you have no custom domain, then set the following property in `vite.config.js` for `defineConfig()`: `base: '/{repo-name}/'`

<!-- TODO explain how to buy and configure a custom domain -->

<!-- TODO create a separate repo and set up a template -->

### Images

Update all images in the `/images` folder.

Check the images have the right dimensions once they have been updated.

### Code

Update `homepage` in `package.json`

Update `src/config.ts` e.g.

-   social links
-   team names
-   membership price

Update `contact.tsx` page with correct information.

Update `membership.tsx` page.

Update news items in `news.json`.

Update list of supporters in `supporters.tsx, including links and logos.

Update the team information in `teamInfo` component, and adjust the display if required (e.g. number per row)

### Tests

Update the expected values (e.g. title) in the tests in `/tests` folder.
