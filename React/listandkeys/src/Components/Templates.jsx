import React from "react";
import Templatemodel from "./Templatemodel";

function Templates() {
  let amazonobj = {
    date: "28/10/2020",
    caseStudy: "Case Study",
    heading: "Amazon Gift",
    h2: "Pay",
    Application: "Desktop - Mobile",
    amz_url: "https://pngimg.com/uploads/letter_a/letter_a_PNG8.png",
  };
  let color = {
    backgroundColor: "#FFA500",
  };
  let Applecolor = {
    backgroundColor: "#f5f5f5",
  };
  let apple = {
    date: "17-Sep-2020",
    caseStudy: "Case Study",
    heading: "Apple Gift",
    h2: "Payment",
    Application: "MacOS - Mobile",
    app_url:
      "https://w7.pngwing.com/pngs/924/257/png-transparent-apple-electric-car-project-cupertino-apple-iphone-electronics-heart-logo.png",
  };

  return (
    <div>
      <Templatemodel amazonobj={amazonobj} apple={apple} amzcolor={color} />
     
    </div>
  );
}

export default Templates;
