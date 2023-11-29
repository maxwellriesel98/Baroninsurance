import React from "react";

function BodyImageLeft(props) {
  return (
    <div className="container heroDes py-4">
      <div className="row mb-2">
        <div className="col-4"></div>
        <div className="col-1"></div>
        <h2 className="border-bottom fst-italic titlefont display-5 fw-light text-light lh-1 col-6">
         {props.title} 
        </h2>
        <div className="col-1"></div>
      </div>
      <div className="row">
      <div className="col-4">
        {props.image1}
      </div>
        <div className="col-1"></div>
        <div className="col-6 text-secondary fw-heavy">
          <p>{props.par1}</p>
          <br></br>
          <p>{props.par2}</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default BodyImageLeft;
