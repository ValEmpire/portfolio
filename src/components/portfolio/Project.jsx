import React, { useState } from "react";
import Modal from "react-modal";
import ModalProjectContent from "./ModalProjectContent";

const Project = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { name, imageUrl } = props.project;

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
        <figure
          onClick={toggleModalOne}
          style={{ borderStyle: "solid", borderWidth: "1px" }}
        >
          <img src={imageUrl} alt="Portolio" />
          <div className=" hover-content-wrapper">
            <span className="content-title">{name}</span>
          </div>
        </figure>

        {/* Start ModalProjectContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">
              <ModalProjectContent project={props.project} />
            </div>
          </div>
        </Modal>
        {/* End  ModalProjectContent */}
      </li>
      {/* <!-- Portfolio Item Ends --> */}
    </>
  );
};

export default Project;
