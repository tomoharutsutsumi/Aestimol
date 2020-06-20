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
  Link
} from "react-router-dom";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxToastr />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Tasks</Link>
                </li>
                <li>
                  <Link to="/new">NewTask</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/new">
                <ConnectedNewTask />
              </Route>
              <Route path="/">
                <ConnectedTask />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

