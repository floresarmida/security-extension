import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { addScript, editScript } from '../../ducks/scripts'
const actions = { addScript, editScript }
//  Styles
import '../../styles/Dashboard.css'

import { Button } from '@blueprintjs/core'

@connect(
  state => ({
    scripts: state.scripts
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)
export default class Dashboard extends React.Component {
  // static propTypes = {
  //   scripts: PropTypes.array.isRequired
  // }
  render ({ scripts } = this.props) {
    console.log('Dashboard loaded scripts', scripts)
    return (
      <section id='dashboard'>
        <Button iconName="refresh">TEST</Button>
        <button className="pt-button pt-icon-refresh" type="button">TEST 2</button>
      </section>
    )
  }
}
/*
<section className={style.normal}>
  Dashboard View
</section>
*/
