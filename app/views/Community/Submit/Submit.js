import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    scripts: state.scripts
  })
)
class Submit extends React.Component {
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
        Submit.js
      </section>
    )
  }
}
export default Submit
