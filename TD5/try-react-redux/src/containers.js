import { connect } from 'react-redux'
import { TodoList, AddTodo } from './components'
import { toggleTodo } from './actions'

function mapStateToProps (state) {
  return { todos: state }
}


function mapDispatchToProps (dispatch) {
  return {
    onTodoClick: id => {
      dispatch( toggleTodo(id) )
    }
  }
}

export const ReduxTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export const ReduxAddTodo = connect()(AddTodo)
