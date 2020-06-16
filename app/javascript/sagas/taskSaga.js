import { put, takeEvery, all } from 'redux-saga/effects'

function* addTask(action){
  const task = action.payload.task
  yield put({type: 'ADD_TASK', task: task})
}

function* watchIncrementAsync(){
  yield takeEvery('REQUEST_ADD_TASK', addTask)
}

export default function* taskSaga(){
  yield all([
    watchIncrementAsync()
  ])
}