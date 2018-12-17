const AppDispatcher = require('./app-dispatcher.js').AppDispatcher;

export class NewsSourceStore {
  static currentNewsSourceId;

  constructor() {
    if (NewsSourceStore.instance) {
      return NewsSourceStore.instance;
    }

    console.log('Singleton Store created');
    NewsSourceStore.currentNewsSourceId = null;
    NewsSourceStore.instance = this;
  }

  setNewsSource = sourceId => {
    NewsSourceStore.currentNewsSourceId = sourceId;
    new AppDispatcher().notify({eventName: 'source-changed', value: sourceId});
  }
}