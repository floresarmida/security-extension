import React, { Component, PropTypes } from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//  Redux Actions
import { executeScript } from '../../ducks/scripts'
import { scriptGroups } from '../../flux/selectors'
//  Styles
import '../../styles/Community.css'

import { Card, CardTitle } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

@connect(
  state => ({
    groups: scriptGroups(state)
  }),
  dispatch => {
    const actions = { executeScript }
    return { actions: bindActionCreators(actions, dispatch) }
  }
)
class Community extends Component {
  static propTypes = {
    groups: PropTypes.object.isRequired
    // actions: PropTypes.object.isRequired
  }
  static defaultProps = {
    groups: {}
  }
  render () {
    const { groups, actions } = this.props

    return (
      <section>
        {Object.keys(groups).map(key => (
          <Card key={key} style={{ marginBottom: 16 }}>
            <CardTitle title={key} style={{ paddingBottom: 0 }} />
          </Card>
        ))}
      </section>
    )
  }
}
export default Community
