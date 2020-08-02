import { useState, useCallback } from 'react';
import {
  TextField,
  Button,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Layout from '../views/components/Layout'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '80%',
      },
    },
  }),
);

export const Todo = (): JSX.Element => {
  const classes = useStyles();
  const [todo, setTodo] = useState<string>('')

  const _addTodo = useCallback(() => {
    window.alert(todo);
  }, [todo]);

  return (
    <Layout title="TODOページ">
      <div className="container">
        <h1>
          ここは、TODOページです{todo}
        </h1>
        <form className={classes.root}>
          <TextField
            required
            label="Required"
            placeholder="TODOを入力してください"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value)
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={_addTodo}
          >
            登録する
          </Button>
        </form>
      </div>
    </Layout>
  )
}

export default Todo;
