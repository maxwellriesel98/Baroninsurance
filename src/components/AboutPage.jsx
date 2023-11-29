import React from "react";
import { Link } from "react-router-dom";
import BodyTextCentered from "./BodyTextCentered";
import BodyImageRight from "./BodyImageRight";

function AboutPage() {
  return (
    <div>
      <BodyTextCentered
        heading="About me"
        bodyText="Hello, I am Jacqueline N. Baron, the CEO/Founder of Baron Insurance Agency and Tax Consultant. I've been doing  Individual taxation since 2004, and an Insurance Broker since 2021. I am licensed in a few states as a Life, Accident & Health Insurance Agent. I have expert knowledge in annuities and other Individual Retirement Arrangements which will provide you with a stream of income in retirement. I also can do Mortgage Insurance as well as Final Burials insurance. I set up College savings accounts for children like 529s.
I also specialize in Medicare and Medicaid Government Insurance as well.  Just call me your ''Jack of all Trades''!

Originally from NYC, I am a go-getter and will never say no to a challenge!  Please visit my site make an appointment meet my team and let's talk and see how we can help you.
"
      />
      <BodyImageRight
        ImageRight={
          <iframe
            title="Baron Insurance Map Location"
            id="map_frame"
            className="imageBorder d-block mx-lg-auto"
            width="300"
            height="300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.807398219928!2d-75.32495376753432!3d42.81355594768283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dbe0687c745049%3A0x8be65caaf48926f9!2s1874%20Gorton%20Lake%20Rd%2C%20West%20Edmeston%2C%20NY%2013485!5e0!3m2!1sen!2sus!4v1670866556895!5m2!1sen!2sus"
          ></iframe>
        }
        title1="Location & Hours:"
        par1={
          <div>
            <p>
              {" "}
              Open from 9:00 AM to 5:00 PM daily and Located at 1874 Gorton Lake
              Road West Edmeston. Before arriving, please be sure to fill out an
              appointment form on our{" "}
              <Link className="text-warning text-decoration-none" to="/contact">
                "Contact Us"
              </Link>{" "}
              page, or call us at (315) 927-7971, or email us directly at
              baroninsuranceagency@gmail.com.
            </p>
          </div>
        }
      />
    </div>
  );
}

export default AboutPage;
