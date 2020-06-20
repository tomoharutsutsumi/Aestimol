import React from "react"
import PropTypes from "prop-types"
class newTask extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      name: '',
      description: '',
      estimateTime: 0,
      resultTime: 0
    }
  }

  render () {
    return (
      <div>
        <input type="text" onChange={e => this.setState({name: e.target.value})}></input>
        <input type="text" onChange={e => this.setState({description: e.target.value})}></input>
        <input type="text" onChange={e => this.setState({estimateTime: e.target.value})}></input>
        <input type="text" onChange={e => this.setState({resultTime: e.target.value})}></input>
        <button onClick={() => this.props.addTask(this.state)}>Post</button>
      </div>
    );
  }
}

export default newTask