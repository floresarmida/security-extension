import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

/*
COMMUNITY > CATEGORY PANE
Renders scripts by category
*/
@connect(
  state => ({
    scripts: state.scripts
  })
)
class Category extends Component {
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
        Category.js
      </section>
    )
  }
}
export default Category
