import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    scripts: state.scripts
  })
)
class Category extends React.Component {
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
