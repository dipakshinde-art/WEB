import React from "react";
import Footers from "./Footers";
import Headers from "./Headers";
import "../App.css";
function Amazone({ amazonobj }) {
  // console.log(amazonobj);
  return (
    <div className="love" >
      <div className='headers'>
        <div>
          <Headers data={amazonobj} />
        </div>
        <div>
          <img src={amazonobj.amz_url} alt="amazon image" />
        </div>
      </div>

      <div>
        <Footers data={amazonobj} />
      </div>
    </div>
  );
}

export default Amazone;
