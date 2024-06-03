import React from "react";
import "./Trending.css";
import { FaImages } from "react-icons/fa";
import { SliderData } from "./SliderData";

const Trending = () => {
  return (
    <div className="trending">
      <h1>Trending</h1>
      <div className="trending-left">
        <div className="trending-left-info">
          <div className="edit-page-inner-flex">
            <div className="img-box">
              <button>Business</button>
              <img className="img" src="./images/photo-2.jfif" alt="" />
              <span>
                <FaImages size={30} color="white" />
              </span>
              <div className="popular-user">
                <img src="./images/snopdogg.jpg" alt="" />
                <div className="popular-info">
                  <h4>Classiskingstor , 24 May 2021</h4>
                </div>
                <div className="edit-page-down-text">
                  <h2>
                    Bitcoin investors lost $14.2 Bn in <br /> recent crypto
                    crash
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore harum cupiditate, magni et culpa ad quod. Est labore
                    voluptatum quidem?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="trending-left-down-info">
            <div className="edit-post ">
              <img src="./images/snopdogg.jpg" alt="" />
              <div className="popular-info">
                <h4>
                  IPL 2021 to be reusme in <br /> sept 3rd week in UAE
                </h4>
                <p>27 Jun 2021</p>
              </div>
            </div>
            <div className="edit-post ">
              <img src="./images/Ajarat.png" alt="" />
              <div className="popular-info">
                <h4>
                  Clubhouse Crosses 1 Mn <br /> Downloads on Play store
                </h4>
                <p>24 May 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="trending-left-info">
          <div className="edit-page-inner-flex">
            <div className="img-box">
              <button>Inspiration</button>
              <img className="img" src="./images/lovely_bg.jpg" alt="" />
              <span>
                <FaImages size={30} color="white" />
              </span>
              <div className="popular-user">
                <img src="./images/2022_10_22_06_27_IMG_0502.JPEG" alt="" />
                <div className="popular-info">
                  <h4>Waris Coder , 24 May 2021</h4>
                </div>
                <div className="edit-page-down-text">
                  <h2>
                    Spotify give a discount for <br /> student.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore harum cupiditate, magni et culpa ad quod. Est labore
                    voluptatum quidem?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="trending-left-down-info">
            <div className="edit-post ">
              <img src="./images/lovely_bg.jpg" alt="" />
              <div className="popular-info">
                <h4>
                  Clubhouse Crosses 1 Mn <br /> Downloads on Play store
                </h4>
                <p>24 May 2021</p>
              </div>
            </div>
            <div className="edit-post ">
              <img src="./images/wallp.jpg" alt="" />
              <div className="popular-info">
                <h4>
                  Arogya app to display <br /> vaccination status.
                </h4>
                <p>24 May 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-right">
        <div className="trending-right-top">
          <h2>Explore Topics</h2>

          <div className="trending-right-top-info">
            <div className="span-info">
              <span className="left-span">{`>`}</span>
              <p>Trending</p>
            </div>
            <span className="right-span">{`(7)`}</span>
          </div>

          <div className="trending-right-top-info">
            <div className="span-info">
              <span className="left-span">{`>`}</span>
              <p>Politic</p>
            </div>
            <span className="right-span">{`(9)`}</span>
          </div>

          <div className="trending-right-top-info">
            <div className="span-info">
              <span className="left-span">{`>`}</span>
              <p>Fashion</p>
            </div>
            <span className="right-span">{`(3)`}</span>
          </div>

          <div className="trending-right-top-info">
            <div className="span-info">
              <span className="left-span">{`>`}</span>
              <p>Lifestyle</p>
            </div>
            <span className="right-span">{`(12)`}</span>
          </div>

          <div className="trending-right-top-info">
            <div className="span-info">
              <span className="left-span">{`>`}</span>
              <p>Inspiration</p>
            </div>
            <span className="right-span">{`(5)`}</span>
          </div>
        </div>

        <div className="trending-right-down">
          <h2>Newsletter</h2>
          <h5>Join {SliderData.length} subscribers!</h5>
          <input
            type="text"
            className="trending-inp"
            placeholder="Email Address.."
          />
          <button className="btn-2">Sign Up</button>
          <p>
            By signing up, you agree to our <a href="#">privacy policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trending;
