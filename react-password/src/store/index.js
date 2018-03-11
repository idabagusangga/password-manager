import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { userReducer } from './reducers/userReducer'
import { passwordReducer } from './reducers/passwordReducer'

import firebase from 'firebase'
import 'firebase/firestore'
import thunk from 'redux-thunk'


const rootReducers = combineReducers({
  userReducer,
  passwordReducer
})

const store = createStore(rootReducers,
   /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk))

export default store