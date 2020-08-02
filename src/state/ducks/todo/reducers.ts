import produce, { Draft } from 'immer'
import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, CREATE_TODO_SUCCESS } from './types'
import { fetchTodoRequested, fetchTodoSuccess, createTodoSuccess } from './actions'
import { Todo, NormalizedTodos } from './models'

export type TodoState = Readonly<{
  data: {
    ids: Todo['id'][]
    entities: NormalizedTodos
  }
}>

const initialState: TodoState = {
  data: { ids: [], entities: {} },
}

export const todoReducer = produce(
  (
    draft: Draft<TodoState>,
    action:
      | ReturnType<typeof fetchTodoRequested>
      | ReturnType<typeof fetchTodoSuccess>
      | ReturnType<typeof createTodoSuccess>
  ) => {
    switch (action.type) {
      case FETCH_TODO_REQUEST:
        draft
        break;
      case FETCH_TODO_SUCCESS:
        draft.data.ids = action.payload.todo.ids
        draft.data.entities = action.payload.todo.entities
        break;
      case CREATE_TODO_SUCCESS:
        Object.values(action.payload.todo.entities).forEach((todo) => {
          if (!draft.data.entities[todo.id]) {
            draft.data.ids.push(todo.id);
          }
          // eslint-disable-next-line no-param-reassign
          draft.data.entities[todo.id] = todo;
        });
        break;
      default:
        draft
    }
  },
  initialState
)
