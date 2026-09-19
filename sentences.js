// Sentence-builder data: a five-step frame for talking about your job.
// Each step is a list of choices; pick one per step and they join in order
// into a full Spanish sentence. Every choice carries its English so the
// builder can assemble a translation the same way it assembles the Spanish.
//
// A step with a single choice is fixed scaffolding (step 2) — it is shown
// but not chosen, and never tested.
//
// es: the Spanish fragment, en: its English.
// enPair: an override for the English of THIS choice plus the next fragment,
//   for the cases where the two languages disagree about word order. Spanish
//   wraps "no ... nada" around the object ("No me gusta nada mi trabajo")
//   while English puts "at all" after it, so those two fragments can only be
//   translated together.
const SENTENCE_FRAME = {
  name: "My job",
  steps: [
    {
      label: "Opinion",
      choices: [
        { es: "Me gusta", en: "I like" },
        {
          es: "No me gusta (nada)",
          en: "I don't like",
          enPair: "I don't like my job at all, because it's",
        },
      ],
    },
    {
      label: "Subject",
      fixed: true,
      choices: [
        { es: "mi trabajo porque es", en: "my job because it's" },
      ],
    },
    {
      label: "Adjective",
      choices: [
        { es: "difícil", en: "difficult" },
        { es: "duro", en: "hard" },
        { es: "estimulante", en: "stimulating" },
        { es: "estresante", en: "stressful" },
        { es: "interesante", en: "interesting" },
        { es: "monótono", en: "monotonous" },
        { es: "repetitivo", en: "repetitive" },
      ],
    },
    {
      label: "Connector",
      choices: [
        { es: "y", en: "and" },
        { es: "pero", en: "but" },
      ],
    },
    {
      label: "Reason",
      choices: [
        { es: "mi jefe/a es muy educado/a", en: "my boss is very polite" },
        { es: "mi jefe/a no es muy educado/a", en: "my boss isn't very polite" },
        { es: "los clientes son exigentes", en: "the clients are demanding" },
        { es: "los clientes son maleducados", en: "the clients are rude" },
        { es: "mis compañeros son simpáticos", en: "my colleagues are nice" },
        { es: "mis compañeros no son simpáticos", en: "my colleagues aren't nice" },
      ],
    },
  ],
};
