import React from "react";

const ModalProjectContent = (props) => {
  const { name, stack, gitUrl, gitName, liveUrl, imageUrl, liveName, details } =
    props.project;

  return (
    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>{name}</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Stack </span>:{" "}
              <span className="ft-wt-600 uppercase">{stack}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <div className="row">
                <div className="col-12 mb-2">
                  <i className="fa fa-github pr-2"></i>
                  <span className="project-label">Git Repo </span>:{" "}
                  <span className="ft-wt-600 uppercase">
                    <a href={gitUrl} target="_blank" rel="noreferrer">
                      {gitName}
                    </a>
                  </span>
                </div>
                {/* End .col */}

                <div className="col-12 mb-2">
                  <i className="fa fa-external-link pr-2"></i>
                  <span className="project-label">Live </span>:{" "}
                  <span className="ft-wt-600 uppercase">
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                      {liveName}
                    </a>
                  </span>
                </div>
                {/* End .col */}
              </div>
            </div>
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}
        {/*  Main Project Content Starts */}
        <img src={imageUrl} alt="Portolio" />
        {/* Main Project Content Ends */}
        <div style={{ marginTop: "10px" }}>
          <small>
            <i style={{ color: "#ffb400" }}>{details}</i>
          </small>
        </div>
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalProjectContent;
