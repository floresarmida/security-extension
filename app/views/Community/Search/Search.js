import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

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
