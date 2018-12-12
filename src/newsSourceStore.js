export class NewsSourceStore {
  static instance;
  static sources;

  constructor(){
    if(NewsSourceStore.instance){
      return NewsSourceStore.instance;
    }

    console.log('Singleton Store created');
    NewsSourceStore.sources = [];
    NewsSourceStore.instance = this;
  }
}