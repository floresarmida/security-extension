import React from 'react'
import hackthislogo2 from '../images/hackthislogo2.png'
import stepshackthis from '../images/stepshackthis.png'

const Exemplar = () => {
  return (
    <section id='examplar '>
      <div className='container'>
        <div className='row'>
          <div className='col l1' />
          <div className='col l10 center-align'>
            <h1>Keeping you safe from hackers</h1>
            <p>A lot of websites that we use on a daily basis are insecure and have vulnerabilites. How do you know that your information is safe and secure?</p>
            <p>Our web extension makes it easier for users to find any flaws in a web application that could expose their information to hackers.</p>
            <img className='responsive-img' src={hackthislogo2} />
            <img className='responsive-img' src={stepshackthis} />

            {/* hackthislogo2.png  */}
          </div>
          <div className='col l1' />
        </div>
      </div>
    </section>
  )
}

export default Exemplar
