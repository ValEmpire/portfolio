import React from "react";

const experienceContent = [
  {
    year: "   May 2021 - Feb 2022",
    position: "In Store Crew",
    compnayName: "Dominos Pizza",
    details: `Create day to day food inventories, taking phone calls, filling out specific orders, making pizzas, and handle cash transactions.`,
  },
  {
    year: "March 2021 - April 2021",
    position: "Full Stack Developer Co-op",
    compnayName: "Hatchways",
    details: `Worked in an agile environment with 3 other developers using React, Express, Node, Socket.io and MongoDB. 
              Participate in daily stand ups.
              Be involved and participate in the overall application lifecycle.`,
  },
  {
    year: "January 2020 - January 2021",
    position: "Freelance Software Developer",
    compnayName: "Videohive",
    details: `
    Developed RESTful apis using Node, Express, MongoDB or Sequelize. 
    Developed mobile application using Flutter. 
    Developed client side app using React and Material ui.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
