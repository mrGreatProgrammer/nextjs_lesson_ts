import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { wrapper } from '../store/store';
// import { store } from '../store/store'

export function App({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />
  // <Provider store={store}>
  // </Provider>
}

export default wrapper.withRedux(App);
