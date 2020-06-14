const initialState = {
  tasks: []
}

export const taskReducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TASK':
      const task = action.payload.task
      return { ...state, tasks: [...state.tasks, task] };
    default: 
      return state
  }
}
