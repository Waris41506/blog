import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaTwitterSquare } from "react-icons/fa"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-left footer-page">
        <h1>Y Waris</h1>
        <p>Lorem ipsum dolor  elit. Mollitia nesciunt, quisquam dignissimos aperiam, amet molestiae quaerat minus? Numquam similique sed quasi nobis earum omnis eaque sequi! Omnis dignissimos dolores totam deleniti id ea placeat.</p>
        <div className="icons-box">
          <FaFacebookF className='icon' size={20} color="#444" />
          <FaInstagram className='icon' size={20} color="#444" />
          <FaLinkedin className='icon' size={20} color="#444" />
          <FaYoutube className='icon' size={20} color="#444" />
          <FaTwitterSquare className='icon' size={20} color="#444" />
        </div>
      </div>
      <div className="footer-middle footer-page">
        <h2>Get In Touch</h2>
        <p>+234 80 5108 5595</p>
        <p>yusuffwaris8@gmail.com</p>
        <p>No. 28 Adeyalo zone 1 </p>
      </div>
      <div className="footer-right footer-page">
        <h2>Our Services</h2>
        <p>website Developement</p>
        <p>Building Applications</p>
        <p>digital Images and videos</p>
      </div>
      <div className="footer-right footer-page">
        <h2>Others</h2>
        <p>Terms and Service</p>
        <p>Privacy Policy</p>
        <p>License</p>
      </div>
    </div>
  )
}

export default Footer