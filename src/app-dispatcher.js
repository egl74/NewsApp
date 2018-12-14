const Dispatcher = require('flux').Dispatcher;
export const AppDispatcher = new Dispatcher();

AppDispatcher.register(payload => {
  switch (payload.eventName) {
    case 'new-source':
      import('./newsSourceStore.js').then(module => {
        new module.NewsSourceStore().sources.push(payload.newSource);
      });
      break;
  }
});
