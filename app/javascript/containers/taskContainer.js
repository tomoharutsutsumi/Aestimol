import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import Task from '../components/Task';

const mapStateToProps = state => {
  return {
    tasks: state.taskState.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(actions.requestFetchTasks()),
    changeTask: (task) => dispatch(actions.requestChangeTask(task)) 
  }
}

const ConnectedTask = connect(mapStateToProps, mapDispatchToProps)(Task)
export default ConnectedTask