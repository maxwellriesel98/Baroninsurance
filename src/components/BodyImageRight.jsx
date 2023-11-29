import React from "react";


function BodyImageRight(props) {
  return (
    <div className="heroDes container px-4 py-4">
      <div className="row flex-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-6 col-lg-6">
          {props.ImageRight}
        </div>
        <div className="col-lg-6  col-sm-6">
          <h1 className="fst-italic titlefont display-5 fw-light text-light lh-1 mb-3">
            {props.title1}
          </h1>
          <p className="text-light lead">
            {props.par1}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyImageRight;
