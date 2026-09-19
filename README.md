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
| Sentence builder | a five-step frame | pick a fragment per step (see below) |

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

## Sentence builder

A different exercise: instead of single words, you assemble a whole sentence
from five steps, one choice per step.

    Me gusta | mi trabajo porque es | interesante | y | mis compañeros son simpáticos

Step 2 is fixed scaffolding — it is shown but not chosen, and never marked.
The other four steps give 168 possible sentences.

Two ways to use it, switched with the Explore/Test toggle:

- **Explore** — pick freely. The Spanish assembles as you go, with unpicked
  steps shown as `—`; the English appears once the sentence is complete.
- **Test** — a scored round of sentences. The app shows you an English
  sentence and you rebuild the Spanish; at the end you get a score and a list
  of the ones you missed.

Set the round length and how you answer on the setup screen:

| Answer style | You get | Marking |
|---|---|---|
| Pick the fragments | the buttons, as in Explore | all-or-nothing, but the feedback says how many steps were right, your wrong picks go red and the ones you missed are outlined green |
| Type the whole sentence | a text box and accent keys | lenient — case, accents and punctuation ignored, and `(nada)` is optional |

Typing hides the fragment buttons until you have answered, since they would
otherwise give the sentence away.

## Adding sentences

`sentences.js` holds one frame. Each step is a list of `{ es, en }` choices:

```js
{ label: "Adjective", choices: [ { es: "difícil", en: "difficult" } ] }
```

Mark a step `fixed: true` when it has a single choice that is never tested.

Translation is fragment-by-fragment, which works as long as both languages
keep the same order. Where they don't, a choice carries `enPair` — the English
for itself *and* the fragment after it, which it then absorbs:

```js
{ es: "No me gusta (nada)", en: "I don't like",
  enPair: "I don't like my job at all, because it's" },
```

This is what stops `No me gusta (nada) mi trabajo porque es` becoming the
word-salad "I don't like ... (at all) my job because it's".

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
