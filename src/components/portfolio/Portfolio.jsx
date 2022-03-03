import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import Project from "./Project.jsx";

const Portfolio = () => {
  const projects = [
    {
      name: "InvestorsWeb",
      imageUrl: "/img/projects/investorsweb.png",
      stack:
        "Node, Express, Firebase, React, Material UI, SocketIo, Redux, PostgreSQL, Sequelize, http-only cookie, Stripe",
      liveUrl: "http://138.197.155.90/",
      liveName: "investorsweb.ca",
      gitUrl: "https://github.com/ValEmpire/investorsweb",
      gitName: "ValEmpire/investorsweb",
      details:
        "A marketplace for entrepreneurs to showcase their startups and raise funding from investors.",
    },
    {
      name: "TinyApp",
      imageUrl: "/img/projects/tinyapp.png",
      stack: "Node, Express, EJS. Test using Mocha, Chai and Chai as Promised",
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
      stack:
        "MongoDB, Express, React, Node, SocketIo, Material UI, Stripe, Google Maps API",
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
      stack: "Node, Express, Firebase, EJS, JQuery, Ajax, PostgreSQL",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/elf",
      gitName: "ValEmpire/elf",
      details:
        "An app where you can put laptops for sale. This lets buyers find the items they are looking for quickly, and easily contact sellers.",
    },
    {
      name: "FlowerNinja Server",
      imageUrl: "/img/projects/flowerninja.png",
      stack: "Node, Express, Sequelize, MYSQL, JWT",
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
      stack: "Node, http, Terminal, OOP Javascript",
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
      stack: "Flutter, Android Studio, Firebase",
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
      stack: "NextJs, Firebase, Material UI, Redux",
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
      stack: "React, Firebase Hosting, Firebase Realtime Database, SCSS",
      liveUrl: "",
      liveName: "",
      gitUrl: "https://github.com/ValEmpire/freshjobs",
      gitName: "ValEmpire/fresh-jobs",
      details: "My po.",
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
