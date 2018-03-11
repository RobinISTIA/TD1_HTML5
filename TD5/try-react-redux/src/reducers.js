import { List, Map } from 'immutable'

export default function reducer (todos=List([]), action) {

 switch (action.type) {

    case 'ADD_TODO':
      return todos.concat([ Map(action.todo) ])

    case 'TOGGLE_TODO':
      let index = todos.findIndex(todo => todo.get('id') === action.todo.id),
          keyPath = [index, 'isDone']

      return todos.setIn(keyPath, !todos.getIn(keyPath))

    default:
      return todos
  }
}
