import React from "react";
import NavBarContainer from "./NavBarContainer/NavBarContainer";
import Section from "./SectionContainer/Section";

const Main = () => {
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url('/images/background.jpg')`, // Specify the path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // Set the height to cover the entire viewport
      }}
    >
      <NavBarContainer />
      <Section/>
    </div>
  );
};
export default Main;
