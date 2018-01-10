import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import storage from './storage'

const middlewares = applyMiddleware(thunk)
let enhancer

//  Add devtool enhancers in development envs
if (process.env.NODE_ENV === 'production') {
  enhancer = compose(
    middlewares,
    storage()
  )
} else {
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose
  enhancer = composeEnhancers(
    middlewares,
    storage()
  )
}

// export default function (initialState) {
//   const store = createStore(rootReducer, initialState, enhancer)
//   console.warn('running createStore', rootReducer, initialState, enhancer)
//   //  Hot reload reducers outside prod
//   if (process.env.NODE_ENV === 'development' && module.hot) {
//     console.log('Replacing reducer in store')
//     module.hot.accept('./reducers', () => {
//       const nextRootReducer = require('./reducers')
//
//       store.replaceReducer(nextRootReducer)
//     })
//   }
//   return store
// }
export default function (initialState) {
  console.warn('Running createStore', rootReducer, initialState, enhancer)
  console.log('ENV', process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    return createStore(rootReducer, initialState, enhancer)
  } else {
    const store = createStore(rootReducer, initialState, enhancer)
    if (module.hot) {
      console.log('Replacing reducer in store')
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers')
        store.replaceReducer(nextRootReducer)
      })
    }
    return store
  }
}
