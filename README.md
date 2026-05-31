Copy your certificate and profile images into this `images/` folder and name them as follows so the site can load them in Chrome:

- img.jpeg            (profile image shown in header/card)
- ce4.jpeg            (certificate 1)
- ce3.jpeg            (certificate 2)
- cert3.png           (certificate 3)
- cer1.jpeg           (certificate 4)

If your files have different names, either rename them to the above or update the `src` and `href` values in `index.html` accordingly.

Opening `index.html` directly in Chrome should now display images when these files are present in this folder. If you plan to host the site, ensure the `images/` folder is deployed with the site.