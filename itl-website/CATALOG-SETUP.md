# Catalog Search Setup

Catalog search (used on **Catalog Mouse Models**, **All Catalog Mouse Models**, **Order Catalog Models**, and humanized checkpoint pages) fetches model data from a Google Sheet via the Google Sheets API. You must set **`GOOGLE_SHEETS_API_KEY`** for it to work.

## Quick fix

1. Get a [Google Sheets API key](https://console.cloud.google.com/apis/credentials) (create API key, enable **Google Sheets API**).
2. In `itl-website`, create or edit **`.env.local`** and add:
   ```bash
   GOOGLE_SHEETS_API_KEY=your-actual-api-key-here
   ```
3. Restart the dev server (`npm run dev`).

---

## 1. Create a Google Cloud API key

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. **Enable the API**: **APIs & Services** → **Library** → search **“Google Sheets API”** → **Enable**.
4. **Create credentials**: **APIs & Services** → **Credentials** → **Create credentials** → **API key**.
5. Copy the API key. (Optional: restrict it to “Google Sheets API” and/or your domain under **API key restrictions**.)

## 2. Add the key to your environment

### Local development

Add to **`.env.local`** in the `itl-website` folder:

```bash
GOOGLE_SHEETS_API_KEY=your-actual-api-key-here
```

Restart the dev server (`npm run dev`) after changing env vars.

### Production (e.g. Vercel)

1. Open your project in **Vercel** → **Settings** → **Environment Variables**.
2. Add **`GOOGLE_SHEETS_API_KEY`** with your API key.
3. Scope it to **Production** (and Preview if you use catalog search there).
4. Redeploy so the new variable is picked up.

## 3. Verify

- Open a page with catalog search (e.g. `/catalog-mouse-models` or `/all-catalog-mouse-models`).
- The search box should load; searching should return results from the sheet.
- If you see **“GOOGLE_SHEETS_API_KEY is not set. Catalog search is unavailable.”**, the key is missing or not loaded. Check `.env.local` / Vercel env and restart or redeploy.

## Spreadsheet

The app uses a specific Google Sheet (ID and sheet name are set in `/api/catalog`). If you use your own sheet, update `src/app/api/catalog/route.ts` (`SPREADSHEET_ID`, `SHEET_NAME`) and ensure the sheet is readable by the API key (same Google account or shared appropriately).

## Troubleshooting

| Issue | Fix |
|-------|-----|
| “GOOGLE_SHEETS_API_KEY is not set” | Add the key to `.env.local` or Vercel env and restart/redeploy. |
| 403 / access denied | Enable **Google Sheets API** for the project and ensure the key can access the sheet. |
| No results / empty | Check that the sheet has a header row and data rows, and that `SHEET_NAME` in the API route matches the tab name. |
