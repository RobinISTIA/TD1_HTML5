
function uid () {
  return Math.random().toString(34).slice(2)
}

export function addTodo (text) {
  return {
    type: 'ADD_TODO',
    todo: {
      id: uid(),
      isDone: false,
      text: text
    }
  }
}

export function toggleTodo (id) {
  return {
    type: 'TOGGLE_TODO',
    todo: { id }
  }
}
