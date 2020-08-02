import { FETCH_TODO_REQUEST, CREATE_TODO_REQUEST } from './types'
import { takeLatest } from 'redux-saga/effects'
import { fetchTasksSaga, createTodoSaga } from './sagas'

export function* watchFetchLockerPlanSaga() {
  yield takeLatest(FETCH_TODO_REQUEST, fetchTasksSaga)
  yield takeLatest(CREATE_TODO_REQUEST, createTodoSaga)
}
