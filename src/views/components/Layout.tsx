import Head from 'next/head'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {
  makeStyles
} from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode
  title?: string
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = ({ children, title }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="todo-next"
        />
        <title>{title}</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TODO-Next
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  )
}

export default Layout;
