import React from 'react'
import {FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaTwitterSquare, FaImages} from "react-icons/fa"

import "./Editor.css"

const Editor = () => {
  return (
    <div className='edit-page'>
        <div className="edit-page-left">
            <h1>Editor's Pick</h1>
            <div className="edit-page-inner-flex">
                <div className="img-box">
                    <button>Lifestyle</button>
                    <img className='img' src="./images/Hockey-1.jpg" alt="" />
                    <span>
                        <FaImages size={30} color="white" />
                    </span>
                    <div className="popular-user">
                        <img src="./images/snopdogg.jpg" alt="" />
                        <div className="popular-info">
                            <h4>Waris Coder , 24 May 2021</h4>
                                 
                        
                        </div>
                        <div className="edit-page-down-text">
                            <h2>3 must visit  places in Nigeria</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum cupiditate, magni et culpa ad quod. Est labore voluptatum quidem?</p>


                        </div>
                    </div>
                </div>

                <div className="edit-page-info">
                    <div className="edit-post ">
                        <img src="./images/snopdogg.jpg" alt="" />
                        <div className="popular-info">
                            <h4>Clubhouse Crosses 1 Mn <br/> Downloads on Play store</h4>
                            <p>24 May 2021</p>
                        </div>
                     </div>

                     <div className="edit-post">
                        <img src="./images/new-bg6.jpg" alt="" />
                            <div className="popular-info">
                                <h4>Bitcoin price rises after <br/> sudden fall</h4>
                                <p>24 May 2021</p>
                             </div>
                     </div>

                     <div className="edit-post">
                        <img src="./images/lovely_bg.jpg" alt="" />
                            <div className="popular-info">
                                <h4>Check current Gold price. </h4>
                                <p>24 May 2021</p>
                            </div>
                     </div>

                     <div className="edit-post">
                        <img src="./images/Ajarat.png" alt="" />
                            <div className="popular-info">
                                <h4>Classickingstore providind <br/> help in covid-19</h4>
                                <p>24 May 2021</p>
                            </div>
                     </div>

                     {/* <div className="edit-post">
                        <img src="./images/new-bg5.jpg" alt="" />
                            <div className="popular-info">
                                <h4>Can we invest in <br/> soverign gold bounds </h4>
                                <p>24 Dec 2021</p>
                            </div>
                     </div> */}
                </div>
            </div>
        </div>
        <div className="edit-page-right">
            <div className="edit-page-right-top-info">
              <h1>Y Blogs</h1>
              <p>This is Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, harum ullam explicabo ea fuga nostrum distinctio non, sapiente molestiae assumenda facere corrupti atque aspernatur cumque sint? Maxime minus odio aut quae explicabo saepe laborum repudiandae, doloremque nemo enim assumenda soluta!</p>
              <div className="icons-box">
                <FaFacebookF className='icon' size={20} color="#444"/>
                <FaInstagram className='icon' size={20} color="#444"/>
                <FaLinkedin className='icon' size={20} color="#444"/>
                <FaYoutube className='icon' size={20} color="#444"/>
                <FaTwitterSquare className='icon' size={20} color="#444"/>
              </div>
            </div>
            <div className="edit-page-right-down-info">
                <h2>Popular Posts</h2>
                <div className="popular-user post-active">
                                <span>4</span>
                                <img src="./images/snopdogg.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Clubehouse breaking <br/> records of meny apps</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user post-active">
                                <span>1</span>
                                <img src="./images/new-bg5.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>At wath age you start <br/> investing </h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user post-active">
                                <span>3</span>
                                <img src="./images/2022_10_22_06_27_IMG_0502.JPEG" alt="" />
                                <div className="popular-info">
                                    <h4>Can we invest in <br/> soverign gold bounds </h4>
                                    <p>24 Dec 2021</p>
                                </div>
                            </div>

                            <div className="popular-user post-active">
                                <span>2</span>
                                <img src="./images/Ajarat.png" alt="" />
                                <div className="popular-info">
                                    <h4>Classickingstore providind <br/> help in covid-19</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>
            </div>

        </div>
    </div>
  )
}

export default Editor