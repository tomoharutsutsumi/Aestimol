import React from "react";
import { Card } from 'react-bootstrap';
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
    return (
      <div>
        {tasks.map((task, i) => 
          <Card style={{width: '45rem', margin: '1rem'}} key={i}>
            <Card.Body>
              <Card.Text>TaskName: {task.name}</Card.Text>
              <Card.Text>Description: {task.description}</Card.Text>
              <Card.Text>EstimateTime: {task.estimate_time}h</Card.Text>
              <Card.Text>ResultTime: {task.result_time}h</Card.Text>
            </Card.Body>  
          </Card>
        )}
      </div>
    );
  }
}

export default Task
