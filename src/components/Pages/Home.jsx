import React, {useState, useEffect} from 'react'
import About from './About'
import Contact from './Contact'
import Editor from './Editor'
import "./Home.css"
import InspireAndpost from './InspireAndpost'
import Trending from './Trending'

const Home = () => {

    const [isActive, setIsActive] = useState(1)
    const [isLoading, setIsLoading] = useState(true)


    const handleActive = () => {
        setIsActive(1)
        setIsLoading(true)
    }

    const handleRecent = () => {
        setIsActive(2)
        setIsLoading(true)
    }

    useEffect(() => {
        setIsActive(1)
    },[])

    useEffect(() => {
        setTimeout( () => setIsLoading(false), 500)
    }, [isLoading])
    
  return (
    <div className='home'>
        <div className='home-page-info'>
            <div className="left">
                <div className="img-cover">
                    <button>Finance</button>
                    <h2>3 Things to avoid while investing in stock market as biginner</h2>
                    <p>Code with Waris - 06 Dec 2022</p>
                </div>
                <img src="./images/new-bg5.jpg" alt="" />
            </div>
            <div className="right">
                <div className="btn-box">
                    
                    <button className={ isActive === 1 ? "btn btn-corrent" : "btn"}
                    onClick={handleActive}>Popular</button>
                    <button className={ isActive === 2 ? "btn btn-corrent" : "btn"}
                    onClick={handleRecent}>Recent</button>
                </div>
                
                
                    <div className="right-info">
                        {isLoading ? (
                            <div className="spinner">
                            <span className='spinner-load'></span>
                        </div>
                        ) :
                        ( 
                        <div className={ isActive === 1 ? "popular popular-current" : "popular"}>
                            <div className="popular-user">
                                <img src="./images/new-bg6.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Bitcoin price rises after <br/> sudden fall</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/snopdogg.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Clubhouse Crosses 1 Mn <br/> Downloads on Play store</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/lovely_bg.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Check current Gold price. </h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/wallp.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Improve your mails with <br/> Grammarly </h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>
                    </div>
                    )}
                    
                
                

                        { isLoading ? (
                        ""
                        //     <div class="spinner-border m-5" role="status">
                        //     <span class="visually-hidden">Loading...</span>
                        //   </div>
                        )
                        : (
                        <div className={ isActive === 2 ? "popular popular-current" : "popular"}>

                            <div className="popular-user">
                                <img src="./images/Ajarat.png" alt="" />
                                <div className="popular-info">
                                    <h4>Classickingstore providind <br/> help in covid-19</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/snopdogg.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>Clubehouse breaking <br/> records of meny apps</h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/new-bg5.jpg" alt="" />
                                <div className="popular-info">
                                    <h4>At wath age you start <br/> investing </h4>
                                    <p>24 May 2021</p>
                                </div>
                            </div>

                            <div className="popular-user">
                                <img src="./images/2022_10_22_06_27_IMG_0502.JPEG" alt="" />
                                <div className="popular-info">
                                    <h4>Can we invest in <br/> soverign gold bounds </h4>
                                    <p>24 Dec 2021</p>
                                </div>
                            </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
        <Editor/>
        <Trending/>
        <InspireAndpost/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home