import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ReduxTodoList, ReduxAddTodo } from './containers'
import reducer  from './reducers'
const store = createStore(reducer)

render(
  <Provider store={store}>
    <div>
      <h1>Liste de tâches</h1>
      <ReduxAddTodo/>
      <ReduxTodoList/>
    </div>
  </Provider>,
  document.getElementById('app')
)
