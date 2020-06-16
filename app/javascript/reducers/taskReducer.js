import { handleActions } from 'redux-actions'

const initialState = {
  tasks: []
}

export const taskReducer = handleActions(
  {
    ADD_TASK: (state = initialState, action) => {
      const task = action.task 
      return { ...state, tasks: [...state.tasks, task] };
    }
  },
  initialState
);
