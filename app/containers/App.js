import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Dashboard from '../views/Dashboard/Dashboard'
import Execution from '../views/Execution/Execution'
import Composition from '../views/Composition/Composition'
import Settings from '../views/Settings/Settings'
import style from '../styles/App.css'

//  These will be factored out once features reach completion.
//  Passing actions/state down the tree defeats the entire purpose of redux
// import * as TodoActions from '../actions/todos';
import { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted } from '../ducks/todos'
const TodoActions = { addTodo, deleteTodo, editTodo, completeTodo, completeAll, clearCompleted }

@connect(
  state => ({
    todos: state.todos,
    view: state.config.view
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }
  componentDidMount () {
    console.log('APP:', chrome)
  }

  render () {
    const { todos, actions } = this.props
    // TODO: Switch statement for rendering view components
    return (
      <article className={style.normal}>
        <div id='placeholder-for-tabs-component'>
          <Dashboard />
          <Execution />
          <Composition />
          <Settings />
        </div>
        <h1>Sample Components (boilerplate):</h1>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </article>
    )
  }
}
