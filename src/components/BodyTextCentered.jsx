import React from "react";

function BodyTextCentered(props) {
  return (
    <div className="heroDes container px-4 pt-5  pb-3 text-center">
      <h1 className="fst-italic titlefont display-5 fw-light text-light">{props.heading}</h1>
      <div className="col-lg-10 mx-auto">
        <p className="text-light lead ">
          {props.bodyText}
        </p>
      </div>
    </div>
  );
}

export default BodyTextCentered;
