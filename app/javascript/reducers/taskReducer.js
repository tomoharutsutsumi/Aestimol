import { handleActions } from 'redux-actions';

const initialState = {
  tasks: []
}

export const taskReducer = handleActions(
  {
    ADD_TASK: (state = initialState, action) => {
      const task = action.task 
      return { ...state, tasks: [...state.tasks, task] };
    },
    FETCH_TASKS: (state = initialState, action) => {
      const tasks = action.tasks
      if (tasks.length === state.tasks.length) {
        return { ...state }        
      } else {
        return { ...state, tasks: [...state.tasks, ...tasks] }
      }
      
    }
  },
  initialState
);
