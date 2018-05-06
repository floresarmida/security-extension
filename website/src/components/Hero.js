import React from 'react'
import hackyo from '../images/hackyo.jpg'

const Hero = () => {
  return (
    <section
      id='hero'
      className='blue lighten-4'
      style={{ backgroundImage: `url(${hackyo})` }}
    >
      <div className='container valign-wrapper jc-center'>
        <div className='valign center-align white-text'>
          <p className='flowtext hide-on-small-only'>Giving you a peace of mind when surfing the web</p>
          <h3>
            Download, Deploy, Hack
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Hero
