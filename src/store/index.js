import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import CounterReducer from '../reducers/CounterReducer'
import counterR from '../reducers/counterSlice'
import newsReducer from '../reducers/newsReducer'

const store = configureStore({
  reducer: {
    counter: counterR,
    counter2: CounterReducer,
    news: newsReducer,
  },
  middleware:[thunk]
})

export default store