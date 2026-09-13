# Spanish Vocab Practice

A small browser-based vocabulary game. No build step, no dependencies — open
`index.html` in a browser and it runs.

## Test modes

| Mode | Prompt | You answer |
|---|---|---|
| English → Spanish | `bread` | `pan` |
| Spanish → English | `pan` | `bread` |
| Spelling — full word | `bread` (+ letter count) | `pan` |
| Spelling — missing letters | `bread` and `p_n` | `pan` |
| Mixed | randomly interleaves all four | |

Pick a category and a question count, then answer with Enter; Enter again moves
to the next question. Accent buttons (á é í ó ú ü ñ) sit under the input.

## Marking

The two translation modes are lenient: case, accents and a leading article are
ignored, so `azucar`, `AZÚCAR` and `el perro` all pass.

The two spelling modes are strict, since spelling is the point. Getting a word
right apart from its accents is called out specifically rather than just marked
wrong.

## Gender

Nouns that inflect for gender (`amigo`/`amiga`) are asked in one gender, chosen
at random:

- **English → Spanish** tags the prompt with the gender wanted — `friend (feminine)` → `amiga`.
  Where English is gendered too, the prompt uses the natural word: `sister`, not "brother (f)".
- **Spanish → English** shows one form and asks you to pick masculine or feminine.
  Both the translation and the gender must be right to score.

Nouns with a *fixed* gender (`mesa`, `libro`) are not treated as gendered —
there is no masculine `mesa` to ask for.

A few nouns are spelt identically in both genders (`cantante`, `electricista`).
These are asked as a single question with a note saying so, and no gender is
scored.

At the end you get a table of what you missed and a button to re-practise just
those words.

## Adding words

`words.js` is a plain list. Add entries in the same shape:

```js
{ en: "bread", es: "pan", cat: "food" },
```

New categories appear in the dropdown automatically. For a noun that inflects:

```js
{ en: "friend", es: "amigo", cat: "people", gender: "pair",
  m: "amigo", f: "amiga", enM: "friend", enF: "friend" },
```

`enM`/`enF` are the English labels for each gender — they differ when English is
gendered too (`hermano` = brother, `hermana` = sister). Add `invariable: true`
when both Spanish forms are spelt the same.
