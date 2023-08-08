import { Provider } from 'react-redux'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import { setupStore } from '../store/store'

const store = setupStore()
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
