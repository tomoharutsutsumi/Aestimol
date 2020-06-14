import { createStore } from 'redux'
import { taskReducer } from './reducers/taskReducer'

const configureStore = () => {
  const store = createStore(taskReducer)
  return store
}

export default configureStore