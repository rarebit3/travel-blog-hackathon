import { createStore, combineReducers, } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import XReducer from './reducers/XReducer'


const store = createStore(
  combineReducers({
    xState: XReducer
  }),
  composeWithDevTools()
)

export default store