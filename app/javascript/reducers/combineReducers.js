import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'
import { taskReducer } from './taskReducer'

const combinedReducers = combineReducers({
  taskState: taskReducer,
  toastrState: toastrReducer
})

export default combinedReducers
