# Sudhanshu Portfolio

Static portfolio site prepared for GitHub Pages with custom domain `sudhanshudwivedi.me`.

## Publish on GitHub Pages

1. Create a GitHub repository for this project.
2. Push these files to the repository.
3. In GitHub, go to **Settings** -> **Pages**.
4. Set the source to your main branch and root folder.
5. Add the custom domain `sudhanshudwivedi.me`.
6. Enable **Enforce HTTPS** after DNS is verified.

## DNS setup for `sudhanshudwivedi.me`

If you manage the domain DNS, point it to GitHub Pages using:

- `A` records for `@`:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `CNAME` record for `www` -> `YOUR_GITHUB_USERNAME.github.io`

If you want the apex domain only, keep the `A` records above and still add the custom domain in GitHub Pages.

## Notes

- Keep the `images/` folder committed so profile photos and certificates load correctly.
- The site is plain HTML/CSS/JS, so no build step is required.
