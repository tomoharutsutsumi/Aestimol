import { put, takeEvery, all, call } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import axiosClient from '../client/axiosClient';

function createTask(taskParams) {
  return axiosClient.request({
    method: 'post',
    url: '/api/v1/tasks',
    data: taskParams
  })
}

function getTasks() {
  return axiosClient.request({
    method: 'get',
    url: '/api/v1/tasks'
  })
}

function* addTask(action){
  try {
    const task = action.payload.task
    yield call(createTask, task)
    yield put({type: 'ADD_TASK', task: task})
    toastr.success('post success!')
  } catch(e) {
    toastr.error(`${e}`)
  }
}

function* fetchTasks(){
  try {
    const tasks = yield call(getTasks)
    yield put({type: 'FETCH_TASKS', tasks: tasks.data})
  } catch(e) {
    toastr.error('fetch failed')
  }
}

function* watchAddTask(){
  yield takeEvery('REQUEST_ADD_TASK', addTask)
}

function* watchFetchTasks(){
  yield takeEvery('REQUEST_FETCH_TASKS', fetchTasks)
}

export default function* taskSaga(){
  yield all([
    watchAddTask(),
    watchFetchTasks()
  ])
}