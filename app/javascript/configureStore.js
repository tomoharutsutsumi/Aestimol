import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers/combineReducers';
import taskSaga from './sagas/taskSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(taskSaga)
  return store
}

export default configureStore