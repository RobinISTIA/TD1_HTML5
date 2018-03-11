import { fromJS } from 'immutable'
import { shallow, render } from 'enzyme'
import TodoList from './components'

describe('TodoList', () => {

  let dummyTodos = fromJS([
    { id : 0, isDone: true, text: 'x' },
    { id : 1, isDone: false, text: 'y' }
  ])

  it('devrait afficher deux taches', () => {
    const wrapper = render(<TodoList todos={dummyTodos} />)
    expect(wrapper.find('.todo__item')).to.have.length(2)
  })

  it('devrait rayer les taches effectuees', () => {
    const wrapper = render(<TodoList todos={dummyTodos} />)
    expect(wrapper.find('.todo__item')[0].attribs.style).to.contain('text-decoration')
  })

})
