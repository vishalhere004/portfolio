# Vishal Pant – Portfolio

A fast, accessible, single-page portfolio for a backend developer. Plain HTML, CSS and JavaScript: no framework, no build step, no dependencies to install.

**Live site:** https://vishalhere004.github.io/portfolio/

## Features

- **Light and dark themes.** Follows the device setting on first visit, with a toggle that remembers your choice.
- **Responsive.** Designed from phone width up, with a mobile menu and no horizontal scrolling.
- **Working contact form.** Sends through [EmailJS](https://www.emailjs.com/) with inline validation, a loading state, clear success and error messages, and a hidden spam trap. Visitors also get an automatic confirmation email.
- **Projects from data.** Projects are one list in `js/main.js`; add an entry and it appears on the page.
- **Accessible.** Skip link, visible keyboard focus, labelled form fields with live error messages, and the page respects the "reduce motion" setting.
- **SEO ready.** Page title, description, Open Graph tags and structured data (JSON-LD).

## Project structure

```
portfolio/
├── index.html        Page content and sections
├── css/styles.css    Design tokens (colours, fonts) and all styles
├── js/main.js        Settings, projects list, theme, menu, contact form
├── assets/           Your CV (VishalPantCV.pdf) and any images
└── README.md
```

## Run it locally

No install needed. Either open `index.html` in a browser, or serve the folder so the site behaves like it will online:

```sh
git clone https://github.com/vishalhere004/portfolio.git
cd portfolio
npx serve .          # or: python3 -m http.server 8000
```

## Make it yours

| To change | Edit |
| --- | --- |
| Text, experience, skills, education | `index.html` |
| Projects | the `PROJECTS` list at the top of `js/main.js` |
| Colours | the `:root` variables at the top of `css/styles.css` (dark theme is the second block) |
| Fonts | the Google Fonts `<link>` in `index.html` and the `--display` / `--body` variables in `css/styles.css` |
| Resume link | the two links labelled "Resume" in `index.html` |

### Add a project

Add an object to `PROJECTS` in `js/main.js`:

```js
{
  title: 'Project name',
  description: 'One or two sentences on what it does.',
  points: ['Optional bullet', 'Another bullet'],
  tags: ['PHP', 'MySQL'],
  links: [{ label: 'View on GitHub', href: 'https://github.com/…' }]
}
```

`points` and `links` are optional.

## Set up the contact form

The form uses EmailJS. The three IDs and the public key live in the `EMAILJS` block at the top of `js/main.js`.

1. In EmailJS, create (or reuse) an email service and two templates:
   - **Message to you:** use the variables `{{user_name}}`, `{{user_email}}` and `{{message}}`.
   - **Auto-reply to the visitor:** use the same variables and set the template's *To email* field to `{{user_email}}`.
2. Copy the service ID, both template IDs and your public key into the `EMAILJS` block.
3. In the EmailJS dashboard, restrict the public key to your site's domain (for example `vishalhere004.github.io`). The key is visible in the page source by design, so this limits who can use it.

If the mail service is blocked or fails, the form tells the visitor and shows your email address instead.

## Deploy on GitHub Pages

1. Put the project files in the root of the repository (keep the `assets/` folder, including your CV PDF).
2. Delete any leftover files from the old Angular version, such as hashed bundles like `main-*.js`, `polyfills-*.js` and `styles-*.css`.
3. Push to the `main` branch.
4. In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.

The site goes live at `https://<username>.github.io/<repository>/`. It also works unchanged on Netlify and Vercel: drag the folder in, with no build command.

## Add your CV

Place the PDF at `assets/VishalPantCV.pdf`, then change the Resume links in `index.html` to `assets/VishalPantCV.pdf`. This keeps the download on your own site instead of the raw GitHub URL.

## Add a preview image

After the site is live, take a screenshot and save it as `assets/preview.png`. Then add this line under the title in this README:

```md
![Portfolio preview](assets/preview.png)
```

## Browser support

Current versions of Chrome, Edge, Firefox and Safari. The theme colours use `color-mix()`, which needs Safari 16.2 or newer.

## License

All content and design © Vishal Pant. You are welcome to learn from the code, but please do not republish the site with your own name on it.
