import React from "react";
import BodyImageRight from "./BodyImageRight";
import BodyImageLeft from "./BodyImageLeft";
import image1 from "../images/authEfile.jpg";
import image2 from "../images/black guy taxes.jpg";
import image3 from "../images/Family.jpeg";
import image4 from "../images/PFP.JPG"
import crest from "../BaronCrest.jpeg";

function HomePage() {
  return (
    <div>
      <BodyImageRight
        ImageRight={
          <img
            src={crest}
            className="imageBorder"
            alt="Baron Family Crest"
            height="300"
            loading="lazy"
          ></img>
        }
        title1="Hey Tax Family!"
        par1="It's Jacqueline from Baron Insurance  Agency & Taxation Consultant.
I can't wait to see you in the coming new tax season! And see how we can get the bang for your buck.
But if you're new to me, please read my bio! Looking forward to see my old clients and welcoming my new clients! "
      />
      <BodyImageLeft
        image1={
          <div className="linkbg linkBorder container">
            <p className="mt-3 fst-italic fw-secondary">"I used to do my own taxes, but Jacqueline changed that for me.
            I used to get about 300-400 back altogether, but since working with her i've gotten over 800$ each time!"</p>
            <p className="text-light fst-italic"> -Maxwell Riesel, client since 2021</p>
          </div>
        }
        title="Fast Refunds, Guaranteed"
        par1=" We Strive for quick and efficient refunds, with the best customer service in the NY area. 
        No matter how high or low your income is, we strive to make sure you get everything that you deserve. 
        As times get harder and every dollar begins to matter more and more, let us take care of all of your needs and make sure you get as much back from your federal and state taxes as you can. 
        Please go to our contacts page and make an appointment to see how we can help you today!"
        par2="Think that a tax consultant isn't as helpful in 2023? Think again.
         A tax professional often see refund increases of over 500$ over what they would normally receive. 
         Even after costs for a tax professional, the additional savings that you make makes it worthwhile. 
         Not to mention saving you both time and energy that could be better spent on yourself or your family. 
         There are over 2,500 pages of tax law. Don't stress yourself out trying to get as much as possible from your refund, put your trust in someone who already knows all the codes.
         put your trust in Baron Tax!"
      />{" "}
    </div>
  );
}

export default HomePage;
