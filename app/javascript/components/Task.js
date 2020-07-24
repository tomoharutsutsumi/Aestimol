import React from "react";
import { Card, Button } from 'react-bootstrap';
import { WORKING } from '../taskStatus'

class Task extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchTasks } = this.props
    fetchTasks()
  }

  render () {
    const { tasks, changeTask } = this.props
    return (
      <div>
        {tasks.map((task, i) => 
          <Card style={{width: '45rem', margin: '1rem'}} key={i}>
            <Card.Body>
              <Card.Text>TaskName: {task.name}</Card.Text>
              <Card.Text>Description: {task.description}</Card.Text>
              <Card.Text>EstimateTime: {task.estimateTime}h</Card.Text>
              <Card.Text>ResultTime: {task.resultTime}h</Card.Text>
              <Button style={{margin: '0.5rem'}} onClick={() => changeTask({ ...task, status: WORKING })}>start this task</Button>
              <Button variant="danger" style={{margin: '0.5rem'}}>finish this task</Button>
            </Card.Body>  
          </Card>
        )}
      </div>
    );
  }
}

export default Task
