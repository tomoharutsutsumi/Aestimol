import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchTasks } = this.props
    fetchTasks()
  }

  render () {
    const { tasks } = this.props
    const task = tasks.map((task, i) => <li key={i}>Name: {task.name}, Description: {task. description}</li>)
    return (
      <div>
        <ul>{task}</ul>
      </div>
    );
  }
}

export default Task
