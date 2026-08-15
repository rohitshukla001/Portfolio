# Portfolio

[info.rohitshukla.net](https://info.rohitshukla.net) is where Rohit Shukla, a full-stack software engineer, points anyone who asks what he has built. Open `index.html` from this repository in a browser and the whole site runs: no build step, no package install, no framework.

## Running it locally

Any static file server works. Python already ships with one:

```bash
python3 -m http.server 8317
```

Open http://localhost:8317 from there. Edit a file, reload the page, and that is the entire feedback loop.

## Where things live

| Path | What it holds |
|---|---|
| `index.html` | Every section of the page, top to bottom |
| `assets/css/style.css` | All custom styling: base rules first, then media queries by breakpoint |
| `assets/js/script.js` | Carousels, the contact form, the copyright year, anchor scrolling, the mobile menu, and the responsive video poster |
| `assets/fonts/` | Calibri regular and bold, self-hosted |
| `assets/images/` | Portrait, project screenshots, certificate images, favicon |
| `assets/documents/` | The certificate PDFs the page links to |
| `assets/videos/` | Hackathon demo clip |
| `resume/` | The resume both Download buttons point at |
| `old_resume/` | Superseded resumes, kept for reference and linked from nowhere |
| `docs/` | Notes and work documents that never reach the browser |

## Stack

Bootstrap 4.6 supplies the grid, Swiper drives the three carousels, Font Awesome draws the icons, and EmailJS delivers the contact form. All four arrive from a CDN, pinned to exact versions and checked with Subresource Integrity, so the page needs a network connection to look right. jQuery is here because Bootstrap's collapse menu asks for it.

## Rules the code keeps

Break one of these and something visible breaks with it:

- Calibri is the only typeface. Two faces ship, regular and bold, so italic text renders as a synthesized slant.
- No text drops below 15px at any viewport width.
- Shared values live as custom properties in `:root`. Change `--header-height` and the body offset and footer height both follow.
- The stylesheet and scripts carry no comments, by choice.
- Search engines get `noindex, nofollow, noarchive, noimageindex` from the meta tag, and `robots.txt` allows crawling so they can reach that tag and obey it.
- Every CDN tag carries an `integrity` hash. Bumping a version means recomputing that hash, which is deliberate friction.

## Deploying

Pushing to `main` publishes the site. GitHub Actions uploads the repository as it stands to GitHub Pages, and `CNAME` points the custom domain at the result.
