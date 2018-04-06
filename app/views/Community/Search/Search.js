import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

/*
COMMUNITY > SEARCH PANE
Advanced filtering of scripts rendered
*/
@connect(
  state => ({
    scripts: state.scripts
  })
)
class Search extends Component {
  static propTypes = {
    scripts: PropTypes.array.isRequired
  }
  static defaultProps = {
    scripts: []
  }
  render (
    { scripts } = this.props
  ) {
    return (
      <section>
        Search.js
      </section>
    )
  }
}
export default Search
