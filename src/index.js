const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const MORSE_SYMBOL = {
    "00": "",
    10: ".",
    11: "-",
  };
  let len = expr.length;
  let index = 0;
  let word = [];
  // Create code-symbol array
  for (let index = 0; index < expr.length; index = index + 10) {
    word.push(expr.slice(index, index + 10));
  }
  // Convert to Morse symbols
  for (let index = 0; index < word.length; index++) {
    if (word[index][0] == "*") {
      word[index] = " ";
      continue;
    }
    let buffer = "";
    for (let i = 0; i < word[index].length - 1; i += 2) {
      buffer += MORSE_SYMBOL[word[index].slice(i, i + 2)];
    }
    word[index] = buffer;
  }
  // Final convert Morse code to Word:
  for (let index = 0; index < word.length; index++) {
    if (word[index] == " ") {
      continue;
    }
    word[index] = MORSE_TABLE[word[index]];
  }
  return word.join("");
}

module.exports = {
    decode
}
