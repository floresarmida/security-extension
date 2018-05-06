import React from 'react'

const Features = () => {
  return (
    <section id='features' className='grey lighten-4'>
      <div className='container'>
        <div className='row'>
          <div className='col m3' />
          <div className='col m6 center-align'>
            <h2>Some Features</h2>
            {/* <p>We worked out an amazing combination of vast functionality and user's comfort. It will totally impress you with its power!</p> */}
            {/* ^^^ Ali, you're going places ^^^ */}
          </div>
          <div className='col m3' />
        </div>
        <div className='row'>
          <div className='col m3'>
            <i className='material-icons'>people</i>
            <h5>Community</h5>
            <p>Hack This leverages the community to provide you scripts that have been created by others and also allows you to upload your own.</p>
          </div>
          <div className='col m3'>
            <i className='material-icons'>pan_tool</i>
            <h5>Stops Hackers</h5>
            <p>Our web extension can help keep you safe from exposing your personal information to unwanted sources by evaluating any web application.</p>
          </div>
          <div className='col m3'>
            <i className='material-icons'>library_books</i>
            <h5>Documentation</h5>
            <p>We provide easy to use documentations/tutorials to get you started on protecting your information.</p>
          </div>
          <div className='col m3'>
            <i className='material-icons'>build</i>
            <h5>Customization</h5>
            <p>Hack This provides a fun and highly customizable web extension that ensures user satisfaction.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
