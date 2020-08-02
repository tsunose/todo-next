import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createTodoRequested } from '../../state/ducks/todo/actions';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  TextField,
  Button,
 } from '@material-ui/core';

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

const AddTodoContainer = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState<string>('')

  const _addTodo = useCallback(() => {
    dispatch(createTodoRequested(todo));
    setTodo('');
  }, [todo]);

  return (
    <>
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
    </>
  );
};

export default AddTodoContainer;
