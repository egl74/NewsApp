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
  getStore().then(store => {
    store.sources = [];
    data.sources.forEach(source => {
      var option = document.createElement("option");
      const keyValues = Object.entries(source);
      store.sources.push({id: source.id, name: source.name});
      option.value = keyValues.filter(keyValue => keyValue[0] == "id")[0][1];
      option.innerHTML = keyValues.filter(
        keyValue => keyValue[0] == "name"
      )[0][1];
      list.appendChild(option);
    });
  });
};

const newsSourceChanged = () => {
  const select = document.getElementById("sourceSelect");
  import('./newsRenderer.js').then(newsRenderer => {
    getStore().then(store => {
      for (const source of store.sources) {
        if (source.id === select.value) {
          newsRenderer.renderNewsBySourceId(source.id);
        }
      }
    });
  });
};

const getStore = async () => {
  return import('./newsSourceStore.js').then(module => {
    return new module.NewsSourceStore();
  })
}