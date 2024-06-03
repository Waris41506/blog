import React, {useState} from 'react'
import {FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaTwitterSquare} from "react-icons/fa"
import {BsShare} from "react-icons/bs"


const ShareDetails = () => {
    const [ share,  setShare] = useState(false)

  return (
    <div>
            <div className="share">
                {share ? <div className='share-box'>
                    <div className='close' onClick={ () => setShare(false)}>X</div>
                    <div className="icons-box">
                        <FaFacebookF className='icon' size={20} color="#444"/>
                        <FaInstagram className='icon' size={20} color="#444"/>
                        <FaLinkedin className='icon' size={20} color="#444"/>
                        <FaYoutube className='icon' size={20} color="#444"/>
                        <FaTwitterSquare className='icon' size={20} color="#444"/>
                    </div>
                </div> : <h2 className='mark' onClick={ () => setShare(true)}>
                <BsShare className='icon' size={20} color="#444"/></h2>}
            </div>
         
    </div>
  )
}

export default ShareDetails