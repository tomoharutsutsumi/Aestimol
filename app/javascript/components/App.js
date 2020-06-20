import React from 'react'
import { Provider } from 'react-redux'
import ConnectedTask from '../containers/taskContainer'
import configureStore from '../configureStore'
import ReduxToastr from 'react-redux-toastr'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxToastr />
        <ConnectedTask />
      </Provider>
    )
  }
}

export default App

