const letters = [
  { ukr: "А", lat: "A" },
  { ukr: "Б", lat: "B" },
  { ukr: "В", lat: "V" },
  { ukr: "Г", lat: "H" },
  { ukr: "Ґ", lat: "G" },
  { ukr: "Д", lat: "D" },
  { ukr: "Е", lat: "E" },
  { ukr: "Є", lat: "Ye", in: "IE" },
  { ukr: "Ж", lat: "Zh" },
  { ukr: "З", lat: "Z" },
  { ukr: "И", lat: "Y" },
  { ukr: "І", lat: "I" },
  { ukr: "Ї", lat: "Yi", in: "YI" },
  { ukr: "Й", lat: "Y", in: "I" },
  { ukr: "К", lat: "K" },
  { ukr: "Л", lat: "L" },
  { ukr: "М", lat: "M" },
  { ukr: "Н", lat: "N" },
  { ukr: "О", lat: "O" },
  { ukr: "П", lat: "P" },
  { ukr: "Р", lat: "R" },
  { ukr: "С", lat: "S" },
  { ukr: "Т", lat: "T" },
  { ukr: "У", lat: "U" },
  { ukr: "Ф", lat: "F" },
  { ukr: "Х", lat: "Kh" },
  { ukr: "Ц", lat: "Ts" },
  { ukr: "Ч", lat: "Ch" },
  { ukr: "Ш", lat: "Sh" },
  { ukr: "Щ", lat: "Shch" },
  { ukr: "Ю", lat: "Yu", in: "IU" },
  { ukr: "Я", lat: "Ya", in: "IA" },
  { ukr: "а", lat: "a" },
  { ukr: "б", lat: "b" },
  { ukr: "в", lat: "v" },
  { ukr: "г", lat: "h" },
  { ukr: "ґ", lat: "g" },
  { ukr: "д", lat: "d" },
  { ukr: "е", lat: "e" },
  { ukr: "є", lat: "ye", in: "ie"},
  { ukr: "ж", lat: "zh" },
  { ukr: "з", lat: "z" },
  { ukr: "и", lat: "y" },
  { ukr: "і", lat: "i" },
  { ukr: "ї", lat: "yi", in: "i" },
  { ukr: "й", lat: "i", in: "i" },
  { ukr: "к", lat: "k" },
  { ukr: "л", lat: "l" },
  { ukr: "м", lat: "m" },
  { ukr: "н", lat: "n" },
  { ukr: "о", lat: "o" },
  { ukr: "п", lat: "p" },
  { ukr: "р", lat: "r" },
  { ukr: "с", lat: "s" },
  { ukr: "т", lat: "t" },
  { ukr: "у", lat: "u" },
  { ukr: "ф", lat: "f" },
  { ukr: "х", lat: "kh" },
  { ukr: "ц", lat: "ts" },
  { ukr: "ч", lat: "ch" },
  { ukr: "ш", lat: "sh" },
  { ukr: "щ", lat: "shch" },
  { ukr: "ю", lat: "yu", in: "iu" },
  { ukr: "я", lat: "ya", in: "ia" },
  { ukr: "ь", lat: "" },
  { ukr: "Ь", lat: "" },
  { ukr: "’", lat: "" },
];

const replaceLetters = (source) => {
  return [...source]
    .map((letter, index, array) => {
      const item = letters.find((item) => item.ukr === letter);
      if (!item) {
        return letter;
      }
      if (!item.in) {
        return item.lat;
      }
      if (index == 0 || (index > 0 && array[index - 1] === " ")) {
        return item.lat;
      } else {
        return item.in;
      }
    })
    .join("");
};

const substrings = [
  { ukr: "зг", lat: "zgh" },
  { ukr: "ЗГ", lat: "ZGH" },
  { ukr: "Зг", lat: "Zgh" },
  { ukr: "зГ", lat: "zGH" },
];

const replaceSubstrings = (source) => {
  let result = source;
  for(let s of substrings) {
    result = result.replaceAll(s.ukr, s.lat);
  }
  return result;
};

const translateText = (source) => {
  return replaceLetters(replaceSubstrings(source));
};

export default translateText;
