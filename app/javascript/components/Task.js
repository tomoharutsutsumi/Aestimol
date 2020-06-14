import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      name: '',
      description: ''
    }

  }

  render () {
    const list = this.props.tasks.map((task, i) => <li key={i}>Name: {task.name}, Description: {task. description}</li>)
    return (
      <div>
        <ul>{list}</ul>
        <input type="text" onChange={e => this.setState({name: e.target.value})}></input>
        <input type="text" onChange={e => this.setState({description: e.target.value})}></input>
        <button onClick={() => this.props.addTask(this.state)}>Post</button>
      </div>
    );
  }
}

export default Task
