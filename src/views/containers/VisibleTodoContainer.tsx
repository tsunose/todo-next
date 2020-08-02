import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from '../../state/ducks/todo/selectors'
import { fetchTodoRequested } from '../../state/ducks/todo/actions'
import TodoList from '../components/TodoList';

const VisibleLockerPlanContainer = (): JSX.Element => {
  const dispatch = useDispatch()
  const todos = useSelector(getTodos)

  console.log(todos)

  useEffect(() => {
    dispatch(fetchTodoRequested())
  }, [])

  return (
    <>
      <TodoList
        todos={todos}
      />
    </>
  )
}

export default VisibleLockerPlanContainer
