import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import get from 'lodash/get'

import Inspector from 'react-json-view'

@connect(
  (state, props) => {
    // Connect to the page reducer, which contains page analysis.
    // Failing that, use raw page/tab data instead - this is scraped onAppStart
    const tabRecord = get(state, ['pages', props.tab, 'analysis'], [])
    const analysis = Object.keys(tabRecord).map(scriptID => tabRecord[scriptID])
    return {
      analysis,
      inspectorConfig: state.config.inspector
    }
  }
)
class Report extends Component {
  static propTypes = {
    analysis: PropTypes.array
  }
  static defaultProps = {
    analysis: []
  }
  render (
    { analysis, inspectorConfig } = this.props
  ) {
    console.log('analysis', analysis)
    return (
      <div>
        {analysis && analysis.map(script => (
          <Card key={script.id} style={{ marginBottom: 8 }}>
            <CardHeader
              title={`${script.name} | Version ${script.version} by ${script.author}`}
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              <pre><code>{script.code}</code></pre>
            </CardText>
            <Inspector
              src={script.output}
              name={script.id}
              collapsed={Object.keys(script.output).length >= 20}
              iconStyle='square'
              {...inspectorConfig}
            />
          </Card>
        ))}
      </div>
    )
  }
}
export default Report
