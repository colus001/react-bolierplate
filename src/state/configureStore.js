import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootEpic from 'state/epics'
import rootReducer from 'state/reducers'

const epicMiddleware = createEpicMiddleware()

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
