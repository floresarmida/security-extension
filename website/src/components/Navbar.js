import React from 'react'
// import hackthislogo2 from '../images/hackthislogo2.png'

const Navbar = () => {
  return (
    <nav className='teal lighten-1'>
      <div className='nav-wrapper'>
        <a href='' className='brand-logo'>Hack This</a>
        {/* <img className="logo-Navbar2" src={hackthislogo2} /> */}
        <a href='#' data-activates='mobile-demo' className='button-collapse right'>
          <i className='material-icons'>menu</i>
        </a>
        <ul id='mobile-demo' className='right hide-on-med-and-down' />
      </div>
    </nav>
  )
}

export default Navbar
