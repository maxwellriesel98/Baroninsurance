import React from "react";
import Filler from "./Filler";

function SentPage(props){

    return(<div className="container heroDes container px-4 pt-5 pb-3">
    <div className="p-5 text-center bg-body-secondary rounded-3">
      <h1 className="text-body-emphasis">{props.title}</h1>
      <p className="lead">
        {props.message}
      </p>
    </div>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
    <Filler/>
  </div>)

}

export default SentPage;