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

@connect(
  state => ({
    todos: state.todos
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { todos, actions } = this.props

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}
