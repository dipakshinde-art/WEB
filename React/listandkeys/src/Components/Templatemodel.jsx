import React from "react";
import Amazone from "./Amazone";
import Apple from "./Apple";

function Templatemodel({ apple, amazonobj, amzcolor, AppleColor }) {
  // console.log(apple,amazonobj);

  return (
    <div>
      <Amazone amazonobj={amazonobj} st={amzcolor} />
      <Amazone amazonobj={amazonobj} st={amzcolor} />
      <Apple apple={apple} />
    </div>
  );
}

export default Templatemodel;
