import '../styles.scss';
import '../lib/polyfill.min.js';
const AppDispatcher = require('./app-dispatcher.js').AppDispatcher;

const sharedConstants = require('./sharedConstants.js');

document.addEventListener('DOMContentLoaded', () => {
  const goButton = document.getElementById('loadNewsButton');
  goButton.addEventListener('click', () => {
    getStore().then(store => {
      store.setNewsSource(document.getElementById('sourceSelect').value);
    })
  });
});

const getNewsSources = async () => {
  await fetch(`https://newsapi.org/v1/sources?apiKey=${sharedConstants.apiKey}`)
    .then(async response => await response.json())
    .then(data => createSourceSelect(data))
    .catch(err => alert(err))
    .finally(() => console.log('fetched'));
};

const newsSourceChanged = (sourceId) => {
  import('./newsRenderer.js').then(newsRenderer => {
    newsRenderer.renderNewsBySourceId(sourceId);
  })
};

getNewsSources();

new AppDispatcher().subscribe({
  eventName: 'source-changed',
  action: newsSourceChanged
});

const createSourceSelect = data => {
  const list = document.getElementById('sourceSelect');
  data.sources.forEach(source => {
    var option = document.createElement('option');
    const keyValues = Object.entries(source);
    option.value = keyValues.filter(keyValue => keyValue[0] == 'id')[0][1];
    option.innerHTML = keyValues.filter(
      keyValue => keyValue[0] == 'name'
    )[0][1];
    list.appendChild(option);
  });
};

const getStore = async () => {
  return import('./newsSourceStore.js').then(module => {
    return new module.NewsSourceStore();
  });
};