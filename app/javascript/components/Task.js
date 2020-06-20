import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    const list = this.props.tasks.map((task, i) => <li key={i}>Name: {task.name}, Description: {task. description}</li>)
    return (
      <div>
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Task
