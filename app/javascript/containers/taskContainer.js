import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import Task from '../components/Task';

const mapStateToProps = state => (
  {
    tasks: state.taskState.tasks
  }
)

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch(actions.requestAddTask({task: task})) 
  }
}

const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)
export default ConnectedTask