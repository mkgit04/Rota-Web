# Rota — Cairo Metro journey planner

A JavaScript React version of the supplied Rota page. The site includes English and Arabic content, a responsive layout, light/dark themes, route navigation, searchable FAQs, and informational support, ticket, privacy, and terms pages.

## Run locally

Install [Node.js](https://nodejs.org/) 20 or later, then run:

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`. To preview that build locally, use `npm run preview`.

## Publish with GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to `main` (or run **Deploy to GitHub Pages** from the Actions tab). The workflow builds the app and deploys `dist`.

The site uses relative asset paths, so it works both on a GitHub Pages project site and a custom domain. The original standalone HTML file is kept in the repository as a reference.

## Project structure

- `src/App.jsx` — page selection, language and theme preferences.
- `src/data.js` — shared English/Arabic content.
- `src/components/` — shared site header, footer, cards, and app mockup.
- `src/pages/` — home, information, legal, and support pages.
- `src/styles.css` — responsive styles from the supplied design.
- `.github/workflows/deploy.yml` — automated GitHub Pages deployment.

Store links, operator details, and contact destinations remain unconfigured, matching the source page.

## Firebase Remote Config

The ticket page fetches the `tickets` Remote Config parameter when opened, as JSON with a `metro` array. The Firebase web app configuration is supplied through Vite environment variables; copy `.env.example` to `.env.local` and fill in the values from **Firebase Console → Project settings → Your apps → Web app**. Local `.env.local` files are ignored by Git.

Publish the `tickets` parameter in Remote Config as a JSON string containing the ticket data. The app validates the payload and displays only a successfully fetched remote value. It shows a loading or error message rather than bundled ticket data when the parameter is missing or a fetch fails.

## Google Sheets support messages

The support form submits messages to the spreadsheet tab in the provided sheet using Google Apps Script:

1. Sign in to the Google account that can edit the support spreadsheet and create a project at [script.google.com](https://script.google.com/).
2. Replace the project's existing code with [`google-apps-script/Code.gs`](./google-apps-script/Code.gs) and save it.
3. Select **Deploy → New deployment → Web app**. Set **Execute as** to your account and access to **Anyone** so visitors can submit the form. Authorize the script to access your spreadsheet.
4. The deployed URL is configured as the default support endpoint in the website. If you redeploy the Apps Script, update that URL in `src/pages/SupportPages.jsx`, or set `VITE_SUPPORT_WEB_APP_URL` as a build-time override, then rebuild and redeploy the site.

The script writes a timestamp, name, email, category, message, and optional device details to the sheet tab identified by its `gid`. It creates a header row when the tab is empty, validates inputs, rate-limits repeat submissions from the same email address, and relays its confirmation through Google's iframe redirect. The endpoint must be publicly accessible for the form to work; never put Google service-account credentials in the website.
