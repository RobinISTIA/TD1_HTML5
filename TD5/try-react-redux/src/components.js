import React from 'react'
import { addTodo } from './actions'

const Todo = ({ isDone, text, onClick }) => (

  <li
    className='todo-item'
    onClick = {onClick}
    style = {{
      textDecoration: isDone ? 'line-through':'none'
    }}
  >{text}</li>
)
export const TodoList = ({ todos, onTodoClick }) => (

  <div className='todo'>

    <ul className='todo-list'>
    {
      todos.map(todo => (
        <Todo
          key={todo.get('id')}
          onClick={() => { onTodoClick(todo.get('id')) }}
          {...todo.toJS()}
        />
      ))
    }
    </ul>
  </div>
)

export const AddTodo = ({ dispatch }) => {
  let input, value
  
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        value = input.value.trim()
        if (!value) return
        dispatch(addTodo(value))
        input.value = ''
      }}>
        <input placeholder='Ajouter une tâche' ref={node => { input = node }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
