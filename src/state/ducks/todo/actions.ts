import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS
} from './types'
import { NormalizedTodo, NormalizedTodos } from './models'

export const fetchTodoRequested = (): Readonly<{
  type: 'FETCH_TODO_REQUEST'
}> => {
  return {
    type: FETCH_TODO_REQUEST,
  }
}

export const fetchTodoSuccess = (
  ids: NormalizedTodo['id'][],
  todos: NormalizedTodos
): Readonly<{
  type: 'FETCH_TODO_SUCCESS'
  payload: {
    todo: {
      ids: NormalizedTodo['id'][]
      entities: NormalizedTodos
    }
  }
}> => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: {
      todo: { ids, entities: todos },
    },
  }
}

export const createTodoRequested = (
  content,
): Readonly<{
  type: 'CREATE_TODO_REQUEST';
  payload: {
    todo: {
      content: string
    };
  };
}> => {
  return {
    type: CREATE_TODO_REQUEST,
    payload: {
      todo: { content }
    }
  }
};


export const createTodoSuccess = (
  ids: NormalizedTodo['id'][],
  todos: NormalizedTodos
): Readonly<{
  type: 'CREATE_TODO_SUCCESS';
  payload: {
    todo: {
      ids: NormalizedTodo['id'][]
      entities: NormalizedTodos
    }
  }
}> => {
  return {
    type: CREATE_TODO_SUCCESS,
    payload: {
      todo: { ids, entities: todos },
    },
  }
};
