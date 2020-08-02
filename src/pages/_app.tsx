import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import '../styles/global.css'
import createStore from '../state/createStore';

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <Provider store={createStore()}>
      <Component {...pageProps}>
        <CssBaseline />
      </Component>
    </Provider>
  )
}

export default App;
