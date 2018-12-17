export class AppDispatcher {
  constructor() {
    if (AppDispatcher.instance) {
      return AppDispatcher.instance;
    }

    console.log('Singleton Dispatcher created');
    AppDispatcher.observers = [];
    AppDispatcher.instance = this;
  }

  subscribe(f) {
    AppDispatcher.observers.push(f);
    console.log(AppDispatcher.observers);
  }

  unsubscribe(eventName) {
    this.observers = AppDispatcher.observers.filter(subscriber => subscriber.eventName !== eventName);
  }

  notify(payload) {
    console.log('notify');
    AppDispatcher.observers.filter(observer => observer.eventName == payload.eventName).forEach(observer => {
      console.log(observer);
      observer.action(payload.value)
    })
  }
}