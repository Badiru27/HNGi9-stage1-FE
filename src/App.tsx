import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

import slack from "../src/images/slack.png";
import git from "../src/images/git.png";


function App() {
  return (
    <div className="items-center w-full px-10 md:px-40 pb-20">

      <Profile/>
      <Body />
      <div className="flex md:hidden py-10 justify-center space-x-5">
        <img src={slack} alt="badiru" />
        <img src={git} alt="badiru" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
