import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './components/Header'
import MainSection from './components/MainSection'
import style from './styles/App.css'

//  Horrendous practice leftover by the boilerplate
// import * as TodoActions from '../actions/todos';
import { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } from './ducks/todos'
const TodoActions = { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted }
console.warn('import actions', addTodo, deleteTodo)

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
class App extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render () {
    const { todos, actions } = this.props
    console.log('TodoActions', TodoActions)
    console.warn('TODOS', todos)
    console.warn('ACTIONS', actions)

    return (
      <div className={style.normal}>
        {actions
          ? <div>
            <Header addTodo={actions.addTodo} />
            <MainSection todos={todos} actions={actions} />
          </div>
          : <span>Loading</span>
        }
      </div>
    )
  }
}
export default App
