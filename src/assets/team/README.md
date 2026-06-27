# Team photos

Drop each team member's photo in this folder, then wire it up in
`src/data/team.js`.

Suggested filenames (square images, ~600×600px or larger, JPG/PNG/WebP):

- `mihir-busa.jpg`
- `jenil-jadafiya.jpg`
- `hardik-thummar.jpg`
- `hardik-dobariya.jpg`

Then in `src/data/team.js`, import and set the `photo` field, e.g.:

```js
import mihir from '../assets/team/mihir-busa.jpg'

// inside the team array entry for Mihir Busa:
photo: mihir,
```

Until a photo is set (`photo: null`), the card shows an elegant monogram
placeholder automatically.
