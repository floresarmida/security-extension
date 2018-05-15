import React, { Component } from 'react'
//  Styles
import '../../styles/Dashboard.css'
import Tab from './Tab/Tab'

/*
DASHBOARD VIEW:
Shows groups & individual tasks that can be executed ad-hoc
*/
class Dashboard extends Component {
  state = {
    id: NaN,
    index: NaN,
    url: 'chrome://newtab/',
    title: 'Tab'
  }
  componentDidMount () {
    chrome.tabs.query(
      { currentWindow: true, active: true },
      (tabs) => {
        const { id, index, url, title } = tabs[0]
        this.setState({ id, index, url, title })
      }
    )
  }
  render () {
    return (
      <section>
        <Tab {...this.state} />
      </section>
    )
  }
}
export default Dashboard
