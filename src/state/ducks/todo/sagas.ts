import * as apis from './apis'
import { call, put } from 'redux-saga/effects'
import { fetchTodoSuccess, createTodoSuccess } from './actions'
import { normalizeTodos, todoNormalizrSchemaKey } from './models'

export function* fetchTasksSaga() {
  try {
    let todos = yield call(apis.getTodos)
    // todos = todos.data.map((el) => {
      todos = todos.map((el) => {
      return {
        id: el.id,
        content: el.content,
        isEnd: el.is_end,
        deletedAt: el.deleted_at,
      }
    })
    const normalized = normalizeTodos(todos)
    console.log(normalized)
    if (normalized.result.length !== 0) {
      yield put(
        fetchTodoSuccess(
          normalized.result,
          normalized.entities[todoNormalizrSchemaKey]
        )
      )
    } else {
      yield put(fetchTodoSuccess([], {}))
    }
  } catch (error) {
    console.log(error)
  } finally {
    // TODO: ローディングストップ処理
  }
}

export function* createTodoSaga(action) {
  try {
    const res = yield call(apis.createTodo, action.payload.todo.content)
    const normalized = normalizeTodos([{
      id: res.id,
      content: res.content,
      isEnd: res.is_end,
      deletedAt: res.deleted_at,
    }])
    yield put(
      createTodoSuccess(
        normalized.result,
        normalized.entities[todoNormalizrSchemaKey],
      )
    );
  } catch (error) {
    console.log(error)
  } finally {
    // TODO: ローディングストップ処理
  }
}


