import React from "react";
import LinkCard from "./LinkCard";
import Filler from "./Filler";

function IndustryPage() {
  return (
    <div className="heroDes  container bodycolor px-4 py-5" id="hanging-icons">
      <h2 className="fst-italic titlefont display-5 fw-light text-light pb-1 ">
        Industry Links
      </h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <LinkCard
          title="Where Is my Federal Refund?"
          par1="Paragraph of text beneath the heading to explain the heading.
        We will add onto it with another sentence and probably just keep
        going until we run out of words."
          link="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
          buttonText="To IRS.gov"
        />
        <LinkCard
          title="Where is my NY State Refund?"
          par1="Paragraph of text beneath the heading to explain the heading.
        We will add onto it with another sentence and probably just keep
        going until we run out of words."
          link="https://www.tax.ny.gov/pit/file/refund.htm"
          buttonText="To NY.gov"
        />
        <LinkCard
          title="Social Security Administration"
          par1="Paragraph of text beneath the heading to explain the heading.
        We will add onto it with another sentence and probably just keep
        going until we run out of words."
          link="https://www.ssa.gov"
          buttonText="To SSA.gov"
        />
      </div>
      <Filler/>
      <Filler/>
      <Filler/>
      <Filler/>




    </div>
  );
}

export default IndustryPage;
