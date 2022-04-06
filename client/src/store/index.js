import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import CommentReducer from './reducers/CommentsReducer'
import LikesReducer from './reducers/LikesReducer'
import PostReducer from './reducers/PostReducer'
import thunk from 'redux-thunk'


const store = createStore(
  combineReducers({
    commentState: CommentReducer,
    likesState: LikesReducer,
    postState: PostReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store