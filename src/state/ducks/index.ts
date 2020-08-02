import { all, spawn, call } from 'redux-saga/effects';
import { combineReducers } from '@reduxjs/toolkit'
import {
  todoReducer as todo,
  TodoState,
  todoWatcherSagas,
} from './todo'

export type StoreState = Readonly<{
  todo: TodoState
}>

export const rootReducer = combineReducers({
  todo,
})

export function* rootSaga() {

  const watchers = [...todoWatcherSagas];

  yield all(
    watchers.map((saga) =>
      // eslint-disable-next-line func-names
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (ex) {
            // eslint-disable-next-line no-console
            console.exception(ex);
          }
        }
      }),
    ),
  );
}
