import { createSelector } from 'reselect'
import { StoreState } from '..'
import { denormalizeTodos, todoNormalizrSchemaKey } from './models'

export const getTodos = createSelector(
  ({ todo }: StoreState) => todo.data,
  (data) =>
  denormalizeTodos({
      result: data.ids,
      entities: { [todoNormalizrSchemaKey]: data.entities },
    })
)
