import React, { Component } from 'react'
import logo from './images/logo.svg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Exemplar from './components/Exemplar'
import Features from './components/Features'
import Footer from './components/Footer'

import './styles/index.scss'

class App extends Component {
  render () {
    return (
      <div id='app'>
        <Navbar />
        <Hero />
        <Exemplar />
        <Features />
        <Footer />
      </div>
    )
  }
}

export default App
