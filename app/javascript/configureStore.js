import { createStore, applyMiddleware } from 'redux'
import { taskReducer } from './reducers/taskReducer'
import taskSaga from './sagas/taskSaga'
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(taskReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(taskSaga)
  return store
}

export default configureStore