<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/readme-dark.svg">
  <img src="assets/readme-light.svg" alt="Illustration of the portfolio home page" width="100%">
</picture>

# Vishal Pant – Portfolio

A fast, accessible, single-page portfolio for a backend developer.<br>
Plain HTML, CSS and JavaScript. No framework, no build step, nothing to install.

<a href="https://vishalhere004.github.io/portfolio/"><img alt="Live site" src="https://img.shields.io/badge/Live%20site-vishalhere004.github.io%2Fportfolio-2F4BEA?style=for-the-badge"></a>

<img alt="HTML, CSS and JavaScript" src="https://img.shields.io/badge/HTML%20%C2%B7%20CSS%20%C2%B7%20JS-no%20build%20step-2F4BEA?style=flat-square">
<img alt="Light and dark themes" src="https://img.shields.io/badge/themes-light%20%2B%20dark-2F4BEA?style=flat-square">
<img alt="Hosted on GitHub Pages" src="https://img.shields.io/badge/hosting-GitHub%20Pages-2F4BEA?style=flat-square">

</div>

<br>

**Jump to:** [Features](#features) · [Quick start](#quick-start) · [Make it yours](#make-it-yours) · [Contact form](#set-up-the-contact-form) · [Deploy](#deploy) · [Design notes](#design-notes)

## Features

<table>
  <tr>
    <td width="50%" valign="top">
      <b>Light and dark themes</b><br>
      Follows the device setting on the first visit. A toggle in the top bar remembers the visitor's choice.
    </td>
    <td width="50%" valign="top">
      <b>Responsive</b><br>
      Designed from phone width up, with a mobile menu and no horizontal scrolling.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>Working contact form</b><br>
      Sends through <a href="https://www.emailjs.com/">EmailJS</a> with inline validation, a loading state, clear success and error messages and a hidden spam trap. Visitors get an automatic confirmation email.
    </td>
    <td valign="top">
      <b>Projects from data</b><br>
      Projects live in one list in <code>js/main.js</code>. Add an entry and it appears on the page.
    </td>
  </tr>
  <tr>
    <td valign="top">
      <b>Accessible</b><br>
      Skip link, visible keyboard focus, labelled form fields with live error messages, and animation that turns off for visitors who prefer reduced motion.
    </td>
    <td valign="top">
      <b>Search and share ready</b><br>
      Page title, description, Open Graph tags and structured data (JSON-LD) are already set.
    </td>
  </tr>
</table>

## Quick start

```sh
git clone https://github.com/vishalhere004/portfolio.git
cd portfolio
npx serve .          # or: python3 -m http.server 8000
```

You can also just open `index.html` in a browser. Serving the folder is closer to how the site behaves online.

```
portfolio/
├── index.html        Page content and sections
├── css/styles.css    Design tokens (colours, fonts) and all styles
├── js/main.js        Settings, projects list, theme, menu, contact form
├── assets/           CV (VishalPantCV.pdf) and images
└── README.md
```

## Make it yours

| To change | Edit |
| --- | --- |
| Text, experience, skills, education | `index.html` |
| Projects | the `PROJECTS` list at the top of `js/main.js` |
| Colours | the `:root` variables at the top of `css/styles.css` (the dark theme is the second block) |
| Fonts | the Google Fonts `<link>` in `index.html`, and `--display` and `--body` in `css/styles.css` |
| Resume link | the two links labelled "Resume" in `index.html` |

<details>
<summary><b>Add a project</b></summary>

<br>

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

</details>

<details>
<summary><b>Add your CV</b></summary>

<br>

Put the PDF at `assets/VishalPantCV.pdf`, then change the two Resume links in `index.html` to `assets/VishalPantCV.pdf`. The download then comes from your own site instead of a raw GitHub URL.

</details>

<details>
<summary><b>Add a preview screenshot</b></summary>

<br>

Once the site is live, take a screenshot, save it as `assets/preview.png` and add this under the title:

```md
![Portfolio preview](assets/preview.png)
```

</details>

## Set up the contact form

The form uses EmailJS. The service ID, both template IDs and the public key sit in the `EMAILJS` block at the top of `js/main.js`.

<details>
<summary><b>Step by step</b></summary>

<br>

1. In EmailJS, create (or reuse) an email service and two templates:
   - **Message to you:** use the variables `{{user_name}}`, `{{user_email}}` and `{{message}}`.
   - **Auto-reply to the visitor:** use the same variables and set the template's *To email* field to `{{user_email}}`.
2. Copy the service ID, both template IDs and your public key into the `EMAILJS` block.
3. In the EmailJS dashboard, restrict the public key to your site's domain, for example `vishalhere004.github.io`. The key is visible in the page source by design, so this limits who can use it.

If the mail service fails or is blocked, the form tells the visitor and shows your email address instead.

</details>

## Deploy

1. Put the project files in the root of the repository. Keep the `assets/` folder, including your CV PDF.
2. Delete leftovers from the old Angular version, such as hashed bundles like `main-*.js`, `polyfills-*.js` and `styles-*.css`.
3. Push to the `main` branch.
4. Open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.

The site goes live at `https://<username>.github.io/<repository>/`. It also works unchanged on Netlify and Vercel: drop the folder in, with no build command.

## Design notes

**Why plain HTML, CSS and JS?** The site is one static page with no routes and no server data, so a framework adds build steps without adding anything visitors can see. Plain files have nothing to break, load quickly and deploy by uploading a folder.

| Token | Light | Dark |
| --- | --- | --- |
| Background | `#EDF0F3` | `#0B111E` |
| Text | `#111C2D` | `#E8EDF5` |
| Muted text | `#586377` | `#98A3B8` |
| Accent | `#2F4BEA` | `#8FA2FF` |

**Type:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) for headings and [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) for body text, both loaded from Google Fonts.

**Browser support:** current Chrome, Edge, Firefox and Safari. The theme uses `color-mix()`, which needs Safari 16.2 or newer.

## Checklist before you publish

- [ ] CV added at `assets/VishalPantCV.pdf` and Resume links updated
- [ ] EmailJS keys checked and restricted to your domain
- [ ] Old Angular files removed from the repository
- [ ] A test message sent through the live contact form

## License

All content and design © Vishal Pant. You are welcome to learn from the code, but please do not republish the site with your own name on it.
