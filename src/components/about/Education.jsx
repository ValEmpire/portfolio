import React from "react";

const educationContent = [
  {
    year: "July 2021 - Feb 2022",
    degree: "Web Development Flex Program",
    institute: "Lighthouse Labs",
    details: `30 weeks of immersive training. Learned so much about Javascript, Node, HTML, CSS, Networking and more.`,
  },
  {
    year: "Jan 2018 - May 2018",
    degree: "Full Stack Development Bootcamp",
    institute: "Zuitt Coding Bootcamp",
    details: `12 weeks bootcamp training. Learned the fundamentals of coding and web applications, JQuery, PHP, Laravel and more.`,
  },
  {
    year: "June 2008 - Oct 2011",
    degree: "BACHELOR DEGREE IN HOSPITALITY MANAGEMENT",
    institute: "Lyceum of the Philippines - University",
    details: `Learned the foundation needed in seeking a career in the service industry. Developed managerial knowledge and function such as hospitality education, customer relations, hotel and restaurant operations, food service, commercial food preparation, and beverage operations.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
