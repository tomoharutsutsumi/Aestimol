import { put, takeEvery, all, call } from 'redux-saga/effects'
import axios from 'axios'

function createTask(taskParams) {
  return axios.request({
    method: 'post',
    url: '/api/v1/tasks',
    data: taskParams
  })
}

function* addTask(action){
  const task = action.payload.task
  yield call(createTask, task)
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