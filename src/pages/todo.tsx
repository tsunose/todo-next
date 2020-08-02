import Layout from '../views/components/Layout'
import AddTodoContainer from '../views/containers/AddTodoContainer';
import VisibleTodoContainer from '../views/containers/VisibleTodoContainer';

export const Todo = (): JSX.Element => {
  return (
    <Layout title="TODOページ">
      <div className="container">
        <h1>
          ここは、TODOページです
        </h1>
        <AddTodoContainer />
        <VisibleTodoContainer />
      </div>
    </Layout>
  )
}

export default Todo;
