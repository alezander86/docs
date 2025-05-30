---
title: "Working With Documentation"
description: "A comprehensive guide to developing KubeRocketCI documentation with Docusaurus, covering prerequisites, local development, and deployment."
sidebar_label: "Working With Documentation"
---
<!-- markdownlint-disable MD025 -->

# Working With Documentation

<head>
  <link rel="canonical" href="https://docs.kuberocketci.io/docs/developer-guide/documentation-guide" />
</head>

This section outlines the necessary steps to start developing the KubeRocketCI documentation using Docusaurus.
Docusaurus is a modern static website generator that simplifies creating, deploying, and maintaining open source project websites.

:::note
  For more details on Docusaurus, please refer to the Docusaurus [official website](https://docusaurus.io/).
:::

Adjusting the documentation to use npm instead of Yarn for working with Docusaurus involves minor changes. Below is the revised version of the documentation section, now specifying npm commands:

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version >= 18.0)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Local Development

1. Fork the [KubeRocketCI documentation repository](https://github.com/KubeRocketCI/docs) to your personal account.

2. Clone the forked documentation repository to your local machine.

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start a local development server:

    ```bash
    npm start
    ```

    This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server. To quit the session, press `ctrl + c` or `cmd + c`.

5. Navigate to `localhost:3000` (or the URL provided in the terminal after running the `npm start` command) in your web browser to view the documentation site.

6. Make the necessary changes to the documentation. The files are located in the `docs` directory. Changes will automatically refresh in the browser.

7. Commit your changes and create a pull request.

## Build

To build the static content of the site into the `build` directory, run:

```bash
npm run build
```

The content generated in the `build` directory can be served using any static content hosting service.

## Deployment

To deploy the documentation site, you can use the following command, which builds the site and pushes it to the `gh-pages` branch:

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

Ensure you replace `<Your GitHub username>` with your actual GitHub username if you are not using SSH.
