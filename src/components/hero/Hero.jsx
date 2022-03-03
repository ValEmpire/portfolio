import React from "react";

const heroContent = {
  heroImage: "img/hero/port.jpg",
  heroMobileImage: "img/hero/port-mobile.jpg",
  heroTitleName: "Arcival Palma",
  heroDesignation: "Web App Developer",
  heroDescriptions: `Ambitious and driven wev app developer with a broad technical skills set. 
  Expertise in RESTful apis using Node and Express, and well versed in client side or server side rendering in React and Redux.`,
  heroBtn: "more about me",
};

const Hero = (props) => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={() => props.setTabIndex(1)}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
