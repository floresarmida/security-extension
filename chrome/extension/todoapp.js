import React from 'react'
import ReactDOM from 'react-dom'
import Root from '../../app/containers/Root'
import defaultState from '../../app/flux/state'
import './todoapp.css'

chrome.storage.local.get('state', (obj = {}) => {
  // const { state } = obj
  // const initialState = JSON.parse(state || '{}')
  // const initialState = JSON.parse(state || defaultState)
  const initialState = typeof obj.state === 'object' ? JSON.parse(obj.state) : defaultState
  console.warn('LOCAL GET STATE', obj, defaultState, initialState)

  const createStore = require('../../app/flux/store')

  //  Chrome async API support
  require('./transform/chrome-extension-async')
  require('./transform/execute-async-function')

  ReactDOM.render(
    <Root store={createStore(initialState)} />,
    document.querySelector('#root')
  )
})
