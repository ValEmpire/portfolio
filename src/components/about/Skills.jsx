import React from "react";

const skillsContent = [
  { skillIcon: "express-original colored", skillName: "NODE/EXPRESS" },
  { skillIcon: "react-original colored", skillName: "REACTJS" },
  { skillIcon: "nextjs-line", skillName: "NEXTJS" },
  { skillIcon: "redux-original colored", skillName: "REDUX" },
  { skillIcon: "firebase-plain colored", skillName: "FIREBASE" },
  { skillIcon: "flutter-plain colored", skillName: "FLUTTER" },
  { skillIcon: "php-plain colored", skillName: "PHP" },
  { skillIcon: "html5-plain-wordmark colored", skillName: "HTML/CSS" },
  { skillIcon: "javascript-plain colored", skillName: "JAVASCRIPT" },
  { skillIcon: "jquery-plain colored", skillName: "JQUERY" },
  { skillIcon: "materialui-plain colored", skillName: "MATERIAL UI" },
  { skillIcon: "postgresql-plain colored", skillName: "POSTGRES/MYSQL" },
  { skillIcon: "sequelize-plain colored", skillName: "SEQUELIZE" },
  { skillIcon: "mongodb-plain colored", skillName: "MONGODB" },
  { skillIcon: "", skillName: "EJS" },
  { skillIcon: "github-original-wordmark", skillName: "GITHUB" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5 text-center" key={i}>
          {val.skillName === "EJS" && (
            <span style={{ fontSize: "38px", color: "green" }}>{"<%"}</span>
          )}
          {val.skillName !== "EJS" && (
            <i
              class={`devicon-${val.skillIcon}`}
              style={{ fontSize: "60px" }}
            ></i>
          )}

          <h6 className="text-uppercase open-sans-font mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
