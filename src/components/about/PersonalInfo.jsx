import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Arcival" },
  { meta: "last name", metaInfo: "Palma" },
  { meta: "Address", metaInfo: "Ottawa, ON" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "phone", metaInfo: "343-202-7130" },
  { meta: "Email", metaInfo: "palma_arcival@yahoo.com" },
  {
    meta: "Github",
    metaInfo: "ValEmpire",
    href: "https://github.com/ValEmpire",
  },
  {
    meta: "LinkedIn",
    metaInfo: "Arcival Palma",
    href: "https://www.linkedin.com/in/arcival-palma-5b7489138",
  },
];

const PersonalInfo = () => {
  return (
    <ul className="text-center about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => {
        if (val.meta === "Github" || val.meta === "LinkedIn") {
          return (
            <li key={i}>
              <span className="title">{val.meta}: </span>
              <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
                <a
                  style={{ textDecoration: "none" }}
                  href={val.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {val.metaInfo}
                </a>
              </span>
            </li>
          );
        }

        return (
          <li key={i}>
            <span className="title">{val.meta}: </span>
            <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
              {val.metaInfo}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default PersonalInfo;
