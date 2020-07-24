import { createAction } from 'redux-actions';

export const addTask = createAction('ADD_TASK')
export const requestAddTask = createAction('REQUEST_ADD_TASK')
export const fetchTasks = createAction('FETCH_TASKS')
export const requestFetchTasks = createAction('REQUEST_FETCH_TASKS')
export const updateTask = createAction('UPDATE_TASK')
export const requestChangeTask = createAction('REQUEST_CHANGE_TASK')