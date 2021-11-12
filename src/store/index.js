import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import CounterReducer from '../reducers/CounterReducer'
import counterR from '../reducers/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterR,
    counter2: CounterReducer,
  },
  middleware:[thunk]
})

export default store