import React from 'react'
import { Provider } from 'react-redux'
import ConnectedTask from '../containers/taskContainer'
import ConnectedNewTask from '../containers/newTaskContainer'
import configureStore from '../configureStore'
import ReduxToastr from 'react-redux-toastr'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap';

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxToastr />
        <Router>
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Aestimol</Navbar.Brand>
              <Nav>
                <LinkContainer to="/all_tasks"><Nav.Link>Tasks</Nav.Link></LinkContainer>
                <LinkContainer to="/tasks/new"><Nav.Link>NewTask</Nav.Link></LinkContainer>
              </Nav>
            </Navbar>
            <Switch>
              <Route exact path="/all_tasks">
                <ConnectedTask />
              </Route>
              <Route path="/tasks/new">
                <ConnectedNewTask />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

