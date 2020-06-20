import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import newTask from '../components/newTask';


const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(actions.requestAddTask({task: task})) 
  }
}

const ConnectedNewTask = connect(mapDispatchToProps)(newTask)
export default ConnectedNewTask