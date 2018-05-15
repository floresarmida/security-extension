import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
//  Redux Actions
import { executeScript } from '../../ducks/scripts'
import { scriptGroups } from '../../flux/selectors'
//  Styles
import '../../styles/Community.css'

import Category from './Category/Category'
import Search from './Search/Search'
import Submit from './Submit/Submit'

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import EditorIcon from 'material-ui/svg-icons/action/code'
import OutputIcon from 'material-ui/svg-icons/action/compare-arrows'
import DocsIcon from 'material-ui/svg-icons/action/chrome-reader-mode'

import { Card, CardTitle } from 'material-ui/Card'
import { firebaseConnect } from 'react-redux-firebase'

/*
COMMUNITY VIEW:
Serves like an "app store" for users to share, rate and comment on scripts
*/
@compose(
  firebaseConnect(['scripts']),
  connect(
    state => ({
      TEST: state.db,
      groups: scriptGroups(state)
    }),
    dispatch => {
      const actions = { executeScript }
      return { actions: bindActionCreators(actions, dispatch) }
    }
  )
)
class Community extends Component {
  static propTypes = {
    groups: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }
  static defaultProps = {
    groups: {}
  }
  constructor (props) {
    super(props)
    this.state = { index: 0 }
    this.select = this.select.bind(this)
  }
  select = (index) => this.setState({ index })
  render (
    { groups } = this.props,
    { index } = this.state
  ) {
    const Views = [<Category />, <Search />, <Submit />]
    return (
      <section>
        <span>{JSON.stringify(this.props)}</span>
        <div>
          {Views[index]}
        </div>
        {Object.keys(groups).map(key => (
          <Card key={key} style={{ marginBottom: 16 }}>
            <CardTitle title={key} style={{ paddingBottom: 0 }} />
          </Card>
        ))}
        <BottomNavigation selectedIndex={index}>
          <BottomNavigationItem
            label='Categories'
            icon={<EditorIcon />}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label='Search'
            icon={<OutputIcon />}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label='Submit'
            icon={<DocsIcon />}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </section>
    )
  }
}
export default Community
