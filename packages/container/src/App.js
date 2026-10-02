import React from "react";
import { mount } from "marketing/MarketingApp";
import MarkitingApp from "./components/MarkitingApp";
console.log(mount, "container");
// the mount is the simple component that take in a ref to an html element.
const App = () => {
  return (
    <div>
      <h1>Welcome to the container application part.</h1>;
      <hr />
      <MarkitingApp />
    </div>
  );
};

export default App;
