import { BIP39_WORDS as WORDLIST } from "./wordlist.js";

const generatePhrase = (numWords) => {
  let phrase = "";

  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * WORDLIST.length);
    phrase += WORDLIST[randomIndex];

    if (i < numWords - 1) {
      phrase += "-";
    }
  }

  return phrase;
};
