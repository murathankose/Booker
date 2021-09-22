import { applyMiddleware, createStore } from 'redux';
import { rootReducer, rootSaga } from './RootReducer';
import { sagaMiddleware } from './middlewares';

const bindMiddleware = (middleware:any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const store: any = createStore(rootReducer, bindMiddleware(middlewares));
  sagaMiddleware.run(rootSaga);

  return store;
};

export { configureStore };
