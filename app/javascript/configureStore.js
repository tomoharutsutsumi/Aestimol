import { createStore } from 'redux'
import { taskReducer } from './reducers/taskReducer'

const configureStore = () => {
  const store = createStore(taskReducer)
  console.log(store)
  return store
}

export default configureStore