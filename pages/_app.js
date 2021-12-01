import App from 'next/app'
import '../styles/globals.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {store} from '../src/component/store/store'
const initState = {
  show: false
}
const rootReducer = ((state = initState, action) => {
  switch(action.type){
    case "SHOWBAR":
      return {
        ...state, show: true
      }
    case "HIDEBAR":
      return {
        ...state, show:false
      }
    default:
      return state
  }
})

// Store
const storeRedux = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return <>
            <Provider store={storeRedux}>
              <Component {...pageProps} />
            </Provider>
          </>
 
}

export default MyApp
