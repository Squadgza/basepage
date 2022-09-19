import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../reducer/reducer'
// import userReducer from './features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    // users: userReducer
  }
})