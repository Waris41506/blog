import React, { useState, useEffect } from "react";
import "./InspireAndpost.css";
import ShareDetails from "./ShareDetails";
import { SliderData } from "./SliderData";
import { SliderDataInfo } from "./SliderDataInfo";

const InspireAndpost = () => {
  const [sliderData, setSliderData] = useState(SliderData);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLenght = SliderDataInfo.length;

  const handleNext2 = () => {
    setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);
  };

  const handlePrev2 = () => {
    setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
  };

  return (
    <div className="inspire-post">
      <div className="inspiration">
        <div className="inspire-left">
          <div className="post-header">
            <h2>Amazing Place On Earth</h2>
            <div className="slide-icon">
              {/* <span onClick={handlePrev}>{`<`}</span>
                        <span onClick={handleNext}>{`>`}</span> */}
            </div>
          </div>

          <div className={"inspire-lect-down"}>
            {sliderData.map((slide, index) => (
              // <div className="post-box">
              <div className="left-slide">
                <div className="img-cover">
                  {/* <button>Finance</button> */}
                  <h2>{slide.postInfo}</h2>
                  <p>{slide.postDate}</p>
                </div>
                <img src={slide.img} alt={slide.postInfo} />

                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
        <div className="inspire-right">
          <div className="inspire-post-info-box">
            {SliderDataInfo.map((slide2, index) => (
              <>
                {index === currentSlide && (
                  <div className="inspire-right-info">
                    <div className="img-cover">
                      <button>{slide2.btn}</button>
                    </div>
                    <img src={slide2.img} alt={slide2.postInfo} />
                    <div className="h2andp">
                      <h2>{slide2.postInfo}</h2>
                      <p>{slide2.postDate}</p>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          <div className="inspire-span-box">
            <span onClick={handlePrev2}>{`<`}</span>
            <span onClick={handleNext2}>{`>`}</span>
          </div>
        </div>
      </div>
      <div className="latest-post">
        <div className="latest-post-left">
          <h2>Latest Post</h2>

          <div className="latest-post-left-info">
            <img src="./images/photo-9.jpg" alt="" />
            <div className="latest-info">
              <div className="latest-post-header">
                <img src="./images/snopdogg.jpg" alt="" />
                <p>Waris Coder</p>
                <p className="p-dot">Trending</p>
                <p className="p-dot">26 May 2022</p>
              </div>
              <h2>
                360-Seater plane flies to Dubai from <br />
                Nigeria with only 1 passenger.
              </h2>
              <p>
                A wonderful serenity has taken possession of my entire <br />
                soul, like these sweet mornings{" "}
              </p>

              <ShareDetails />
            </div>
          </div>

          <div className="latest-post-left-info">
            <img src="./images/cricket-1.webp" alt="" />
            <div className="latest-info">
              <div className="latest-post-header">
                <img src="./images/snopdogg.jpg" alt="" />
                <p>Waris Coder</p>
                <p className="p-dot">Trending</p>
                <p className="p-dot">26 May 2022</p>
              </div>
              <h2>
                360-Seater plane flies to Dubai from <br />
                Nigeria with only 1 passenger.
              </h2>
              <p>
                A wonderful serenity has taken possession of my entire <br />
                soul, like these sweet mornings{" "}
              </p>

              <ShareDetails />
            </div>
          </div>

          <div className="latest-post-left-info">
            <img src="./images/photo-3.jfif" alt="" />
            <div className="latest-info">
              <div className="latest-post-header">
                <img src="./images/snopdogg.jpg" alt="" />
                <p>Waris Coder</p>
                <p className="p-dot">Trending</p>
                <p className="p-dot">26 May 2022</p>
              </div>
              <h2>
                360-Seater plane flies to Dubai from <br />
                Nigeria with only 1 passenger.
              </h2>
              <p>
                A wonderful serenity has taken possession of my entire <br />
                soul, like these sweet mornings{" "}
              </p>

              <ShareDetails />
            </div>
          </div>
        </div>
        <div className="latest-post-right">
          <div>
            <h2>Tag Clouds</h2>
            <div className="btn-box">
              <div className="btn1">
                <button>#Trending</button>
                <button>#Cooking</button>
                <button>#Featured</button>
              </div>

              <div className="btn2">
                <button>#Beauty</button>
                <button>#Finance</button>
                <button>#Celebrities</button>
              </div>

              <div className="btn3">
                <button>#Technology</button>
                <button>#Movies</button>
                <button>#Cricket</button>
              </div>
            </div>
          </div>

          <div className="latest-post-right-down">
            <h2>Get Notification</h2>
            <h5>when website Updating!</h5>
            <input
              type="text"
              className="trending-inp"
              placeholder="Email Address.."
            />
            <button className="btn-2">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspireAndpost;
