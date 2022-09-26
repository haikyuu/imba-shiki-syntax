import { defineShikiSetup } from "@slidev/types";
import imbaGrammar from "./imba.tmlang.json";
import imbaTheme from "./imbadark.theme.json";

import {BUNDLED_LANGUAGES} from 'shiki'
const imbaLang = {
  id: "mylanguage",
  scopeName: "source.imba",
  grammar: imbaGrammar,
  aliases: ["imba"],
};

const langs = []
langs.push(imbaLang)
// await highlighter.loadLanguage(imbaLang);
export default defineShikiSetup(() => {
  return {
    langs,
    theme: {
      dark: imbaTheme,
      light: imbaTheme,
    },
  };
});
