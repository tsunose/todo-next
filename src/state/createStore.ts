import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer, rootSaga } from './ducks'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

// @see: https://github.com/reduxjs/redux-toolkit/blob/master/docs/api/configureStore.md
const createStore = () => {
  const middlewareList = [...getDefaultMiddleware(), logger, sagaMiddleware];
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
  });
  sagaMiddleware.run(rootSaga)
  return store
};

export default createStore;
