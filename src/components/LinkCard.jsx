import React from "react";

function LinkCard(props) {
  return (
    <div className="linkbg border-color-translucent linkBorder col d-flex align-items-start">
      <div>
        <h3 className="mt-3 px-1 fs-2 text-body-emphasis fst-italic ">{props.title}</h3>
        <p>{props.par1}</p>
        <a target="_blank" rel="noreferrer" href={props.link} className="mb-4 btn btn-warning">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}
export default LinkCard;
