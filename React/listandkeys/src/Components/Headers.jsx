import React from "react";
import "../App.css";
function Headers(props) {
//  console.log("yes", props);
  return (
    <>
      <h1>{props.data.date}</h1>
      <button>{props.data.caseStudy}</button>
    </>
  );
}

export default Headers;
