import translateText from "./translation.js";
// import { doTest } from "./test.js";
// doTest();

const refs = {
  source: document.querySelector("#source"),
  result: document.querySelector("#result"),
  paste: document.querySelector("#paste"),
  copy: document.querySelector("#copy"),
};

refs.source.addEventListener("input", () => {
  refs.result.value = translateText(refs.source.value);
});

refs.copy.addEventListener("click", () => {
  navigator.clipboard.writeText(refs.result.value);
});

refs.paste.addEventListener("click", () => {
  navigator.clipboard.readText().then((text) => (refs.source.value = text));
});

refs.source.focus();
