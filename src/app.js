import '../styles.scss';
import '../lib/polyfill.min.js';

const sharedConstants = require('./sharedConstants.js');

document.addEventListener("DOMContentLoaded", () => {
  const goButton = document.getElementById("loadNewsButton");
  goButton.addEventListener("click", () => {
    newsSourceChanged();
  });
});

const getNewsSources = async () => {
  await fetch(`https://newsapi.org/v1/sources?apiKey=${sharedConstants.apiKey}`)
    .then(async response => await response.json())
    .then(data => createSourceSelect(data))
    .catch(err => alert(err))
    .finally(() => console.log("fetched"));
};

getNewsSources();

const createSourceSelect = data => {
  const list = document.getElementById("sourceSelect");
  data.sources.forEach(source => {
    var option = document.createElement("option");
    const keyValues = Object.entries(source);
    option.value = keyValues.filter(keyValue => keyValue[0] == "id")[0][1];
    option.innerHTML = keyValues.filter(
      keyValue => keyValue[0] == "name"
    )[0][1];
    list.appendChild(option);
  });
};

const newsSourceChanged = () => {
  const select = document.getElementById("sourceSelect");
  import('./newsRenderer.js').then(newsRenderer => {
    for (const option of select.options) {
      if (option.value === select.value) {
        newsRenderer.renderNewsBySourceId(select.value);
      }
    }
  });
};