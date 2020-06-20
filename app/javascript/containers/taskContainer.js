import { connect } from 'react-redux';
import * as actions from '../actions/taskAction';
import Task from '../components/Task';

const mapStateToProps = state => (
  {
    tasks: state.taskState.tasks
  }
)

const ConnectedTask = connect(mapStateToProps)(Task)
export default ConnectedTask