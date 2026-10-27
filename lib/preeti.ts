const H = "\u094d";

const P2U: [string, string][] = [
  ["\u00f7", "/"],
  ["v", "\u0916"],
  ["r", "\u091a"],
  ['"', "\u0942"],
  ["~", "\u091e\u094d"],
  ["z", "\u0936"],
  ["\u00e7", "\u0950"],
  ["f", "\u093e"],
  ["b", "\u0926"],
  ["n", "\u0932"],
  ["j", "\u0935"],
  ["\u00d7", "\u00d7"],
  ["V", "\u0916\u094d"],
  ["R", "\u091a\u094d"],
  ["\u00df", "\u0926\u094d\u092e"],
  ["^", "\u096c"],
  ["\u00db", "!"],
  ["Z", "\u0936\u094d"],
  ["F", "\u0901"],
  ["B", "\u0926\u094d\u092f"],
  ["N", "\u0932\u094d"],
  ["\u00cb", "\u0919\u094d\u0917"],
  ["J", "\u0935\u094d"],
  ["6", "\u091f"],
  ["2", "\u0926\u094d\u0926"],
  ["\u00bf", "\u0930\u0942"],
  [">", "\u0936\u094d\u0930"],
  [":", "\u0938\u094d"],
  ["\u00a7", "\u091f\u094d\u091f"],
  ["&", "\u096d"],
  ["\u00a3", "\u0918\u094d"],
  ["\u2022", "\u0921\u094d\u0921"],
  [".", "\u0964"],
  ["\u00ab", "\u094d\u0930"],
  ["*", "\u096e"],
  ["\u201e", "\u0927\u094d\u0930"],
  ["w", "\u0927"],
  ["s", "\u0915"],
  ["g", "\u0928"],
  ["\u00e6", "\u201c"],
  ["c", "\u0905"],
  ["o", "\u092f"],
  ["k", "\u092a"],
  ["W", "\u0927\u094d"],
  ["\u00d6", "="],
  ["S", "\u0915\u094d"],
  ["\u00d2", "\u00a8"],
  ["_", ")"],
  ["[", "\u0943"],
  ["\u00da", "\u2019"],
  ["G", "\u0928\u094d"],
  ["\u02c6", "\u092b\u094d"],
  ["C", "\u090b"],
  ["O", "\u0907"],
  ["\u00ce", "\u0919\u094d\u0916"],
  ["K", "\u092a\u094d"],
  ["7", "\u0920"],
  ["\u00b6", "\u0920\u094d\u0920"],
  ["3", "\u0918"],
  ["9", "\u0922"],
  ["?", "\u0930\u0941"],
  [";", "\u0938"],
  ["'", "\u0941"],
  ["#", "\u0969"],
  ["\u00a2", "\u0926\u094d\u0918"],
  ["/", "\u0930"],
  ["+", "\u0902"],
  ["\u00aa", "\u0919"],
  ["t", "\u0924"],
  ["p", "\u0909"],
  ["|", "\u094d\u0930"],
  ["x", "\u0939"],
  ["\u00e5", "\u0926\u094d\u0935"],
  ["d", "\u092e"],
  ["`", "\u091e"],
  ["l", "\u093f"],
  ["h", "\u091c"],
  ["T", "\u0924\u094d"],
  ["P", "\u090f"],
  ["\u00dd", "\u091f\u094d\u0920"],
  ["\\", "\u094d"],
  ["\u00d9", ";"],
  ["X", "\u0939\u094d"],
  ["\u00c5", "\u0939\u0943"],
  ["D", "\u092e\u094d"],
  ["@", "\u0968"],
  ["\u00cd", "\u0919\u094d\u0915"],
  ["L", "\u0940"],
  ["H", "\u091c\u094d"],
  ["4", "\u0926\u094d\u0927"],
  ["\u00b1", "+"],
  ["0", "\u0923\u094d"],
  ["<", "?"],
  ["8", "\u0921"],
  ["\u00a5", "\u0930\u094d\u200d"],
  ["$", "\u096a"],
  ["\u00a1", "\u091c\u094d\u091e\u094d"],
  [",", ","],
  ["\u00a9", "\u0930"],
  ["(", "\u096f"],
  ["\u2018", "\u0945"],
  ["u", "\u0917"],
  ["q", "\u0924\u094d\u0930"],
  ["}", "\u0948"],
  ["y", "\u0925"],
  ["e", "\u092d"],
  ["a", "\u092c"],
  ["i", "\u0937\u094d"],
  ["\u2030", "\u091d\u094d"],
  ["U", "\u0917\u094d"],
  ["Q", "\u0924\u094d\u0924"],
  ["]", "\u0947"],
  ["\u02dc", "\u093d"],
  ["Y", "\u0925\u094d"],
  ["\u00d8", "\u094d\u092f"],
  ["E", "\u092d\u094d"],
  ["A", "\u092c\u094d"],
  ["M", "\u0903"],
  ["\u00cc", "\u0928\u094d\u0928"],
  ["I", "\u0915\u094d\u0937\u094d"],
  ["5", "\u091b"],
  ["\u00b4", "\u091d"],
  ["1", "\u091c\u094d\u091e"],
  ["\u00b0", "\u0919\u094d\u0922"],
  ["=", "."],
  ["\u00c6", "\u201d"],
  ["\u2039", "\u0919\u094d\u0918"],
  ["%", "\u096b"],
  ["\u00a4", "\u091d\u094d"],
  ["!", "\u0967"],
  ["-", "("],
  ["\u203a", "\u0926\u094d\u0930"],
  [")", "\u0966"],
  ["\u2026", "\u2018"],
  ["\u00dc", "%"],
];

const P2U_MAP = new Map(P2U);

// Matra classes used by the re-ordering rules
const MATRAS_NO_I =
  "\u093e\u0940\u0941\u0942\u0943\u0947\u0948\u094b\u094c\u0902\u0903\u0901";
const MATRAS_ALL =
  "\u093e\u093f\u0940\u0941\u0942\u0943\u0947\u0948\u094b\u094c\u0902\u0903\u0901";
const MATRAS_NO_ANUSVARA =
  "\u093e\u093f\u0940\u0941\u0942\u0943\u0947\u0948\u094b\u094c\u0903";

const R = (src: string) => new RegExp(src, "g");

// Post-processing rules, applied in order
const P2U_RULES: [RegExp, string][] = [
  [R(`${H}\u093e`), ""],
  [R(`(\u0924${H}\u0930|\u0924${H}\u0924)([^\u0909\u092d\u092a]+?)m`), "$1m$2"],
  [R(`\u0924${H}\u0930m`), `\u0915${H}\u0930`],
  [R(`\u0924${H}\u0924m`), `\u0915${H}\u0924`],
  [R(`([^\u0909\u092d\u092a]+?)m`), "m$1"],
  [R(`\u0909m`), "\u090a"],
  [R(`\u092dm`), "\u091d"],
  [R(`\u092am`), "\u092b"],
  [R(`\u0907\\{`), "\u0908"],
  [R(`\u093f((.${H})*[^${H}])`), "$1\u093f"],
  [R(`(.[${MATRAS_ALL}]*?)\\{`), "{$1"],
  [R(`((.${H})*)\\{`), "{$1"],
  [R(`\\{`), `\u0930${H}`],
  [R(`([${MATRAS_NO_I}]+?)(${H}(.${H})*[^${H}])`), "$2$1"],
  [R(`${H}([${MATRAS_NO_I}]+?)((.${H})*[^${H}])`), `${H}$2$1`],
  [R(`([\u0902\u0901])([${MATRAS_NO_ANUSVARA}]*)`), "$2$1"],
  [R("\u0901\u0901"), "\u0901"],
  [R("\u0902\u0902"), "\u0902"],
  [R("\u0947\u0947"), "\u0947"],
  [R("\u0948\u0948"), "\u0948"],
  [R("\u0941\u0941"), "\u0941"],
  [R("\u0942\u0942"), "\u0942"],
  [/^\u0903/, ":"],
  [R("\u091f\u0943"), `\u091f${H}\u091f`],
  [R("\u0947\u093e"), "\u093e\u0947"],
  [R("\u0948\u093e"), "\u093e\u0948"],
  [R("\u0905\u093e\u0947"), "\u0913"],
  [R("\u0905\u093e\u0948"), "\u0914"],
  [R("\u0905\u093e"), "\u0906"],
  [R("\u090f\u0947"), "\u0910"],
  [R("\u093e\u0947"), "\u094b"],
  [R("\u093e\u0948"), "\u094c"],
];

export function preetiToUnicode(input: string): string {
  let out = "";
  for (const ch of input) out += P2U_MAP.get(ch) ?? ch;
  for (const [re, rep] of P2U_RULES) out = out.replace(re, rep);
  return out;
}

/* ------------------------------------------------------------------ */
/*  UNICODE  ->  PREETI                                                */
/* ------------------------------------------------------------------ */

// full forms
const FULL: Record<string, string> = {
  क: "s",
  ख: "v",
  ग: "u",
  घ: "3",
  ङ: "\u00aa",
  च: "r",
  छ: "5",
  ज: "h",
  झ: "em",
  ञ: "`",
  ट: "6",
  ठ: "7",
  ड: "8",
  ढ: "9",
  ण: "0f",
  त: "t",
  थ: "y",
  द: "b",
  ध: "w",
  न: "g",
  प: "k",
  फ: "km",
  ब: "a",
  भ: "e",
  म: "d",
  य: "o",
  र: "/",
  ल: "n",
  व: "j",
  श: "z",
  ष: "if",
  स: ";",
  ह: "x",
};

// half forms (consonant + halant)
const HALF: Record<string, string> = {
  क: "S",
  ख: "V",
  ग: "U",
  घ: "\u00a3",
  च: "R",
  ज: "H",
  झ: "\u2030",
  ञ: "~",
  ण: "0",
  त: "T",
  थ: "Y",
  ध: "W",
  न: "G",
  प: "K",
  फ: "\u02c6",
  ब: "A",
  भ: "E",
  म: "D",
  ल: "N",
  व: "J",
  श: "Z",
  ष: "i",
  स: ":",
  ह: "X",
};

// ready-made conjunct glyphs: [full form, half form]
const SPECIAL: Record<string, [string, string]> = {
  क्ष: ["If", "I"],
  ज्ञ: ["1", "\u00a1"],
  त्र: ["q", "q\\"],
  त्त: ["Q", "Q\\"],
  श्र: [">", ">\\"],
  द्ध: ["4", "4\\"],
  द्द: ["2", "2\\"],
  द्य: ["B", "B\\"],
  द्व: ["\u00e5", "\u00e5\\"],
  द्म: ["\u00df", "\u00df\\"],
  द्र: ["\u203a", "\u203a\\"],
  द्घ: ["\u00a2", "\u00a2\\"],
  ट्ट: ["\u00a7", "\u00a7\\"],
  ठ्ठ: ["\u00b6", "\u00b6\\"],
  ड्ड: ["\u2022", "\u2022\\"],
  ट्ठ: ["\u00dd", "\u00dd\\"],
  ङ्ग: ["\u00cb", "\u00cb\\"],
  ङ्ख: ["\u00ce", "\u00ce\\"],
  ङ्क: ["\u00cd", "\u00cd\\"],
  ङ्घ: ["\u2039", "\u2039\\"],
  ङ्ढ: ["\u00b0", "\u00b0\\"],
  न्न: ["\u00cc", "\u00cc\\"],
  ध्र: ["\u201e", "\u201e\\"],
};

const VOWELS: Record<string, string> = {
  अ: "c",
  आ: "cf",
  इ: "O",
  ई: "O{",
  उ: "p",
  ऊ: "pm",
  ऋ: "C",
  ए: "P",
  ऐ: "P]",
  ओ: "cf]",
  औ: "cf}",
  ॐ: "\u00e7",
  ऽ: "\u02dc",
};

const MATRA_OUT: Record<string, string> = {
  "\u093e": "f",
  "\u0940": "L",
  "\u0941": "'",
  "\u0942": '"',
  "\u0943": "[",
  "\u0947": "]",
  "\u0948": "}",
  "\u094b": "f]",
  "\u094c": "f}",
  "\u0902": "+",
  "\u0901": "F",
  "\u0903": "M",
  "\u0945": "\u2018",
};
const PRE_I = "\u093f";

const OTHER: Record<string, string> = {
  "०": ")",
  "१": "!",
  "२": "@",
  "३": "#",
  "४": "$",
  "५": "%",
  "६": "^",
  "७": "&",
  "८": "*",
  "९": "(",
  "0": ")",
  "1": "!",
  "2": "@",
  "3": "#",
  "4": "$",
  "5": "%",
  "6": "^",
  "7": "&",
  "8": "*",
  "9": "(",
  "।": ".",
  ".": "=",
  "(": "-",
  ")": "_",
  "+": "\u00b1",
  "%": "\u00dc",
  "!": "\u00db",
  "/": "\u00f7",
  ";": "\u00d9",
  "?": "<",
  "=": "\u00d6",
  "\u201c": "\u00e6",
  "\u201d": "\u00c6",
  "\u2019": "\u00da",
  "\u2018": "\u2026",
  ":": "M",
};

const isCons = (c: string) => c >= "\u0915" && c <= "\u0939";

function half(c: string): string {
  return HALF[c] ?? (FULL[c] ?? c) + "\\";
}

/** Convert a consonant cluster (e.g. ["क","ष"] = क्ष) to Preeti glyphs. */
function cluster(tokens: string[], endsHalant: boolean): string {
  let out = "";
  const n = tokens.length;
  let i = 0;
  while (i < n) {
    const lastToken = i === n - 1 && !endsHalant;

    // 1) ready-made conjunct glyph
    if (i + 1 < n) {
      const key = tokens[i] + H + tokens[i + 1];
      const sp = SPECIAL[key];
      if (sp) {
        const endsHere = i + 1 === n - 1 && !endsHalant;
        out += endsHere ? sp[0] : sp[1];
        i += 2;
        continue;
      }
      // 2) consonant + ra  (प्र, क्र, ...)  ->  full + "|"
      if (tokens[i + 1] === "र") {
        out += (FULL[tokens[i]] ?? tokens[i]) + "|";
        i += 2;
        if (i < n || endsHalant) out += "\\";
        continue;
      }
    }

    out += lastToken ? (FULL[tokens[i]] ?? tokens[i]) : half(tokens[i]);
    i++;
  }
  return out;
}

export function unicodeToPreeti(input: string): string {
  const chars = Array.from(input.replace(/[\u200c\u200d]/g, ""));
  const len = chars.length;
  let out = "";
  let i = 0;

  while (i < len) {
    const ch = chars[i];

    if (isCons(ch)) {
      const tokens = [ch];
      let endsHalant = false;
      i++;

      while (i < len && chars[i] === H) {
        if (i + 1 < len && isCons(chars[i + 1])) {
          tokens.push(chars[i + 1]);
          i += 2;
        } else {
          endsHalant = true;
          i++;
          break;
        }
      }

      const matras: string[] = [];
      while (
        i < len &&
        (chars[i] === PRE_I || MATRA_OUT[chars[i]] !== undefined)
      ) {
        matras.push(chars[i]);
        i++;
      }

      // reph: leading "र्" + more consonants
      let reph = false;
      if (tokens[0] === "र" && tokens.length >= 2) {
        reph = true;
        tokens.shift();
      }

      const hasI = matras.includes(PRE_I);
      const rest = matras.filter((m) => m !== PRE_I);

      let body: string;
      let restOut = rest;
      if (
        tokens.length === 1 &&
        tokens[0] === "र" &&
        !endsHalant &&
        (rest[0] === "\u0941" || rest[0] === "\u0942")
      ) {
        body = rest[0] === "\u0941" ? "?" : "\u00bf"; // रु / रू
        restOut = rest.slice(1);
      } else {
        body = cluster(tokens, endsHalant);
      }

      out +=
        (hasI ? "l" : "") +
        body +
        restOut.map((m) => MATRA_OUT[m]).join("") +
        (reph ? "{" : "");
      continue;
    }

    if (VOWELS[ch] !== undefined) {
      out += VOWELS[ch];
      i++;
      // vowel followed by matra-like marks (anusvara etc.)
      while (i < len && MATRA_OUT[chars[i]] !== undefined) {
        out += MATRA_OUT[chars[i]];
        i++;
      }
      continue;
    }

    out += OTHER[ch] ?? ch;
    i++;
  }

  return out;
}
