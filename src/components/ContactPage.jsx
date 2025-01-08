import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Filler from "./Filler";
function ContactPage() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phya0rp",
        "template_2wk45bl",
        form.current,
        "fsrXxuDyimpGSPtpt"
      )
      .then(
        () => {
          navigate("/success");
        },
        () => {
          navigate("/failure");
        }
      );
  };

  return (
    <div className="container heroDes container px-4 pt-5 pb-3">
      <div className=" m-0 border-0 row">
        <div className="row col-5-lg col-12-sm">
          <h2 className="fst-italic titlefont display-5 fw-light text-light lh-1 mb-3">
            Contact Us
          </h2>
          <br></br>
          <p className="text-light lead">
            We are here for all your needs. Please fill out this form and leave as much detail as you can so I can help you to the best of my ability.
            We will get back to you as soon as we can. Thank you for choosing Baron Insurance Agency and Tax Consultant for all of your financial needs!
          </p>
          
        </div>
        <div className="row g-1 col-3 col-sm-0"></div>
        <form ref={form} onSubmit={sendEmail} className="container row g-1 col-lg-6 col-sm-12">
          <div className="col-md-6 my-0">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              name="inputEmail"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="col-md-6 my-0">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="inputName"
              placeholder="Full Name"
              required
            ></input>
          </div>
          <div className="col-12 my-0">
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              name="inputPhone"
              placeholder="Phone Number"
              required
            ></input>
          </div>
          <div className="col-12 my-0">
            <textarea
              rows="10"
              type="text-body"
              className="form-control"
              id="inputMessage"
              name="inputMessage"
              placeholder="Input message here (DO NOT ADD ANY SENSITIVE INFORMATION)"
              required
            ></textarea>
          </div>

          <div className="col-3 col-sm-0"></div>
          <div className="col-12 my-0">
            <button
              type="submit"
              className="d-grid col-12 btn-lg btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      
   
    </div>
  );
}

export default ContactPage;
