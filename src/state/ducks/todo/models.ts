import { schema, normalize, denormalize } from 'normalizr'

export type Todo = {
  id: number;
  content: string;
  isEnd: boolean;
  deletedAt: string
}

export type NormalizedTodo = Todo

export const todoNormalizrSchemaKey = 'todos'

export const todoNormalizrSchema = new schema.Entity<Todo>(
  todoNormalizrSchemaKey,
  {},
  {
    idAttribute: 'id',
  }
)

export type NormalizedTodos = {
  [id: string]: NormalizedTodo
}

export const normalizeTodos = (todos: Todo[]) =>
  normalize<
    Todo,
    { [todoNormalizrSchemaKey]: NormalizedTodos },
    Todo['id'][]
  >(todos, [todoNormalizrSchema])

export const denormalizeTodos = (
  todos: ReturnType<typeof normalizeTodos>
): Todo[] =>
  denormalize(
    todos.result,
    [todoNormalizrSchema],
    todos.entities
  )
