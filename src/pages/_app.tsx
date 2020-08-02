import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <Component {...pageProps}>
      <CssBaseline />
    </Component>
  )
}

export default App;
