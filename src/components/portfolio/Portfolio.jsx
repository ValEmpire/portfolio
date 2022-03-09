import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import Project from "./Project.jsx";

const Portfolio = () => {
  const projects = [
    {
      name: "InvestorsWeb",
      imageUrl: "/img/projects/investorsweb.png",
      clientStack: "Firebase, React, Material UI, SocketIo, Redux, Stripe",
      serverStack:
        "Node, Express, Firebase-admin, SocketIo, PostgreSQL, Sequelize, http-only cookie, Stripe",
      liveUrl: "http://investorsweb.ca/",
      liveName: "investorsweb.ca",
      gitUrl: "https://github.com/ValEmpire/investorsweb",
      gitName: "ValEmpire/investorsweb",
      details:
        "A marketplace for entrepreneurs to showcase their startups and raise funding from investors.",
    },
    {
      name: "JobTracker",
      imageUrl: "/img/projects/jobtracker.png",
      clientStack:
        "React, Firebase Realtime Database, Firebase Hosting, React Spreadsheet",
      serverStack: "",
      liveUrl: "https://jobtracker-682cb.web.app/",
      liveName: "jobtracker.ca",
      gitUrl: "https://github.com/ValEmpire/jobtracker",
      gitName: "ValEmpire/jobtracker",
      details:
        "A full stack web app for lighthouse students who wants to track their job searching. I built this app to solve issues of students tracking their job searches with their mentors.",
    },
    {
      name: "TinyApp",
      imageUrl: "/img/projects/tinyapp.png",
      clientStack: "EJS, JQuery, AJAX",
      serverStack: "Node, Express, Test using Mocha, Chai and Chai as Promised",
      liveUrl: "https://tinyurlval.herokuapp.com/login",
      liveName: "tinyapp.ca",
      gitUrl: "https://github.com/ValEmpire/tinyapp",
      gitName: "ValEmpire/tinyapp",
      details:
        "TinyApp is a full stack web application built with EJS as a templating engine and Node and Express that allows users to shorten long URLs (à la bit.ly).",
    },
    {
      name: "Chef's Menu",
      imageUrl: "/img/projects/chefs.png",
      clientStack: "React, Material UI, Stripe, ContextAPI",
      serverStack: "MongoDB, Express, Node, SocketIo, Stripe, Google Maps API",
      liveUrl: "https://chef-booking-app.herokuapp.com/login",
      liveName: "chefsmenu.ca",
      gitUrl: "https://github.com/hatchways/team-manta-ray",
      gitName: "team-manta-ray",
      details:
        "It’s always nice to have a homecooked meal that is authentic and made in your own kitchen! This is a marketplace where you can book a chef in your area based on cuisine type and availability!",
    },
    {
      name: "Easy Laptop Finder",
      imageUrl: "/img/projects/elf.png",
      clientStack: "Firebase, EJS, JQuery, Ajax",
      serverStack: "Node, Express, PostgreSQL",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/elf",
      gitName: "ValEmpire/elf",
      details:
        "An app where you can put laptops for sale. This lets buyers find the items they are looking for quickly, and easily contact sellers.",
    },
    {
      name: "Tweeter",
      imageUrl: "/img/projects/tweeter.png",
      clientStack: "HTML, CSS/Bootstrap, JQuery, Ajax",
      serverStack: "Node, Express",
      liveUrl: "https://tweeter-val.herokuapp.com/",
      liveName: "tweeter.ca",
      gitUrl: "https://github.com/ValEmpire/tweeter",
      gitName: "ValEmpire/tweeter",
      details: "Tweeter is a simple, single-page Twitter clone.",
    },
    {
      name: "FlowerNinja Server",
      imageUrl: "/img/projects/flowerninja.png",
      clientStack: "",
      serverStack: "Node, Express, Sequelize, MYSQL, JWT, Paypal API",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/Gabszy10/gabszy-flower-backend",
      gitName: "flowerninja-backend",
      details:
        "Flowerninja is a flowerstore located in Philippines. Through this platform, we seek to make your gift-giving experience as convenient and enjoyable as possible.",
    },
    {
      name: "Snake multiplayer",
      imageUrl: "/img/projects/snake.png",
      clientStack: "HTML, CSS",
      serverStack: "Node, http, Terminal, OOP Javascript",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/snake_multiplayer",
      gitName: "snake-multiplayer",
      details:
        "This game was not built from scratch. It was inspired and started from snek (blog post). Tania Rascia is the original author.",
    },
    {
      name: "My Kwento",
      imageUrl: "/img/projects/mykwento.png",
      clientStack: "Dart, Flutter, Material Design, Firebase ",
      serverStack: "",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/MyKwento",
      gitName: "ValEmpire/my-kwento",
      details:
        "MyKwento is a mobile app where users can share their personal stories anonymously. This will help people release their emotions or advice other users anonymously.",
    },
    {
      name: "FreshJobs",
      imageUrl: "/img/projects/freshjobs.png",
      clientStack: "NextJs, Firebase, Material UI, Redux",
      serverStack: "Node, Express, MongoDB, Mongoose Firebase-admin",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/freshjobs",
      gitName: "ValEmpire/fresh-jobs",
      details:
        "Freshjobs is a job listing website that provide opportunities for job seekers who does not have an experience in technology industry.",
    },
    {
      name: "My Portfolio",
      imageUrl: "/img/projects/portfolio.png",
      clientStack: "React, Firebase Hosting, Firebase Realtime Database, SCSS",
      serverStack: "serverless",
      liveUrl: "https://arcival-palma.web.app/",
      liveName: "arcival-palma.web.app",
      gitUrl: "https://github.com/ValEmpire/portfolio",
      gitName: "ValEmpire/myportfolio",
      details:
        "Ambitious and driven web app developer with a broad technical skills set. Expertise in RESTful apis using Node and Express, and well versed in client side or server side rendering in React and Redux.",
    },
    {
      name: "Simpson Wong",
      imageUrl: "/img/projects/client.png",
      clientStack: "Wix Website Builder",
      serverStack: "",
      liveUrl: "https://www.simpsonwong.com/",
      liveName: "simpsonwong.com",
      gitUrl: "",
      gitName: "",
      details: "Created a portfolio for my client using Wix website builder.",
    },
    {
      name: "Flights Server",
      imageUrl: "/img/projects/flight.png",
      clientStack: "",
      serverStack: "Node, Express, Axios",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/flights",
      gitName: "ValEmpire/flights",
      details:
        "Wrote a simple backend JSON API. Routes recieves JSON data about new tickets being created and returns JSON data about the flights that are happening between start date  and end date.",
    },
  ];

  return (
    <Tabs>
      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            {projects.map((project, i) => (
              <Project project={project} />
            ))}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Portfolio;
