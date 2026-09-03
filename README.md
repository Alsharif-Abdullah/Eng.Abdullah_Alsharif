# Abdullah Faisal Alsharif — Personal Profile Website

A bilingual (Arabic/English) professional profile page. Plain HTML/CSS/JS — no build step, no dependencies.

## Preview locally

No install needed. Either:

- Double-click `index.html` to open it directly in a browser, or
- In VS Code, install the **Live Server** extension, right-click `index.html` → **Open with Live Server** (gives you auto-reload while editing).

## Project structure

```
index.html      ← all content, EN + AR side by side
css/style.css    ← styling
js/main.js        ← language toggle (EN ⇄ AR, saves preference)
assets/            ← images (add a real photo/favicon here when ready)
```

## Editing content

Every piece of text appears twice: once inside a `<span class="lang-en">...</span>` and once inside `<span class="lang-ar">...</span>`, right next to each other. Edit both together — the page toggles which one is visible based on the selected language, so an update to only one side will look fine until someone switches languages.

## Deploying to GitHub Pages

1. Create a new **public** GitHub repository (e.g. `profile-website`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial profile website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` / root**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

### Optional: custom domain

If you buy a domain later, add a `CNAME` file at the project root containing just the domain (e.g. `abdullahalsharif.com`), and point the domain's DNS at GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Status

Live at **https://alsharif-abdullah.github.io/Eng.Abdullah_Alsharif/**
