import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className="con-left">
            <h1>Get In Touch</h1>
            <form action="">
                <div className="top-inp">
                    <input type="text" placeholder='Your Name'/>
                    <input type="email" placeholder='Your Email'/>
                </div>
                <input type="text" placeholder='Subject'/>
                <textarea name="" id="" cols="75" rows="15" placeholder='How can we help?'></textarea>
            </form>
            <p>Looking for help? Fill the form and start a new adventure.</p>
        </div>
        <div className="con-right">
          <div className="iframe-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507365.3245583991!2d3.0037633095566476!3d6.547977480168733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1665708397426!5m2!1sen!2sng" style={{border:0}} allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
    </div>
  )
}

export default Contact