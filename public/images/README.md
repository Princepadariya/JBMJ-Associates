# Images folder

Drop any image here (logos, team photos, banners, icons, etc.) and use it
anywhere in the site by its path under `/images/...`.

Because this folder lives in `public/`, files are served **as-is** at the root
URL — you do NOT need to import them in code.

## How to use an image

1. Put your file here, e.g. `public/images/team/mihir-busa.jpg`
2. Reference it with a leading slash from the site root:

   In a React component / data file:
   ```jsx
   <img src="/images/team/mihir-busa.jpg" alt="CA Mihir Busa" />
   ```

   In the team data (`src/data/team.js`):
   ```js
   photo: '/images/team/mihir-busa.jpg',
   ```

   In CSS:
   ```css
   background-image: url('/images/banner.jpg');
   ```

## Folders

- `public/images/team/` — team member headshots
- `public/images/` — everything else (logo, banners, etc.)

You can create more sub-folders if you like — just keep the path in sync,
e.g. a file at `public/images/clients/acme.png` is used as
`/images/clients/acme.png`.

## Tips

- Use web-friendly formats: **.jpg** (photos), **.png** (logos/transparency),
  **.webp** (smaller files), **.svg** (icons/logos).
- Keep file names lowercase with hyphens, no spaces: `bank-loan.jpg`, not
  `Bank Loan.JPG`.
- Team headshots look best as square or portrait images, ~600×600px or larger.
