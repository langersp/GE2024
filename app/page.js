"use client";

import Image from "next/image";
import rawData from "./data/ge2024-v6.json";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import SideBarHeader from "./components/SideBarHeader";
import SideBarMainContent from "./components/SideBarMainContent";
import SideBarFooter from "./components/SideBarFooter";
import VoteResult from "./components/VoteResult";

function sumVotes(partyData, lookup, convertInt) {
  return partyData.reduce((accumulator, currentValue) => {
    if (convertInt) {
      currentValue = parseInt(currentValue);
    }

    if (lookup) {
      if (currentValue === lookup) {
        accumulator++;
      }
      return accumulator;
    } else if (currentValue) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
}

export default function Page() {
  const [pollSliderPercentage, setPollSliderPercentage] = useState(4);
  const [antiTorySliderPercentage, setAntiTorySliderPercentage] = useState(20);
  const [reformToggle, setReformToggle] = useState(true);
  const [verdict, setVerdict] = useState({
    verdict: "Labour Majority of 10",
    verdictColor: "red",
  });

  const [conservativeData, setConservativeData] = useState({
    2019: 372,
    nowCast: 184,
    reform: 0,
  });

  const [labourData, setLabourData] = useState({
    2019: 199,
    nowCast: 386,
    reform: 0,
  });

  const [liberalData, setLiberalData] = useState({
    2019: 9,
    nowCast: 30,
    reform: 0,
  });

  const [greenData, setGreenData] = useState({
    2019: 1,
    nowCast: 1,
    reform: 0,
  });

  const [reformData, setReformData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [snpData, setSnpData] = useState({
    2019: 48,
    nowCast: 26,
    reform: 0,
  });

  const [pcData, setPcData] = useState({
    2019: 2,
    nowCast: 3,
    reform: 0,
  });

  const [otherData, setOtherData] = useState({
    2019: 1,
    nowCast: 2,
    reform: 0,
  });

  const handlePollSliderChange = (newValue) => {
    setPollSliderPercentage(newValue);
  };

  const handleAntiTorySliderChange = (newValue) => {
    setAntiTorySliderPercentage(newValue);
  };

  const handleReformToggle = (event) => {
    setReformToggle(event.target.checked);
    calculateVotes(
      event.target.checked,
      pollSliderPercentage,
      antiTorySliderPercentage
    );
  };

  const handlePollsTighten = () => {
    calculateVotes(
      reformToggle,
      pollSliderPercentage,
      antiTorySliderPercentage
    );
  };

  const calculateVotes = (
    reformToggle,
    pollSliderPercentage,
    antiTorySliderPercentage
  ) => {
    let conservativeSum = 0,
      labourSum = 0,
      liberalSum = 0,
      reformSum = 0,
      greenSum = 0,
      snpSum = 0,
      pcSum = 0,
      otherSum = 0;

    for (let i = 0; i <= 631; i++) {
      let AP2 = 0,
        AQ2 = 0;

      const E2 = rawData[2]["Lab"][i] - pollSliderPercentage / 100;
      let F2 = rawData[5]["Lib"][i];
      let G2 = rawData[6]["BRX"][i];
      let H2 = rawData[7]["GRN"][i];
      let I2 = rawData[8]["SNP"][i];
      let J2 = rawData[9]["PC"][i];

      F2 = F2 !== "" ? parseFloat(F2) : 0;
      G2 = G2 !== "" ? parseFloat(G2) : 0;
      H2 = H2 !== "" ? parseFloat(H2) : 0;
      I2 = I2 !== "" ? parseFloat(I2) : 0;
      J2 = J2 !== "" ? parseFloat(J2) : 0;

      const range1 = Math.max(E2, F2);
      const range2 = Math.max(H2, I2, J2);
      const V2 = E2 + F2 + H2 + I2 + J2;
      const U2 = Math.max(range1, range2);

      let AH2 = parseFloat(rawData[1]["Con"][i]) + pollSliderPercentage / 100;

      const W2 = V2 - U2;

      const X2 = (W2 * antiTorySliderPercentage) / 100;

      let Y2 = U2 + X2;
      Y2 = parseFloat(Y2);

      const AI2 = E2 === U2 ? Y2 : E2;
      const AK2 = G2 === U2 ? Y2 : G2;

      if (reformToggle) {
        AP2 = AK2 * 0.7;
        AQ2 = AK2 * 0.3;
      }
      const AR2 = AH2 + AP2;

      let AS2 = AI2 + AQ2;

      let AT2 = F2 === U2 ? Y2 : F2;
      let AU2 = 0;
      let AV2 = H2 === U2 ? Y2 : H2;

      let AW2 = I2 === U2 ? Y2 : I2;

      let AX2 = J2 === U2 ? Y2 : J2;
      //let AY2 = 0;
      let AY2 = rawData[10]["other"][i];
      AY2 = parseFloat(AY2);

      const range3 = Math.max(AR2, AS2, AT2, AU2, AV2, AW2, AX2, AY2);

      let AZ2 = AR2 === range3 ? 1 : 0;

      let BA2 = AS2 === range3 ? 1 : 0;
      let BB2 = AT2 === range3 ? 1 : 0;
      let BC2 = AU2 === range3 ? 1 : 0;
      let BD2 = AV2 === range3 ? 1 : 0;
      let BE2 = AW2 === range3 ? 1 : 0;
      let BF2 = AX2 === range3 ? 1 : 0;
      let BG2 = AY2 === range3 ? 1 : 0;

      conservativeSum += AZ2;
      labourSum += BA2;
      liberalSum += BB2;
      reformSum += BC2;
      greenSum += BD2;
      snpSum += BE2;
      pcSum += BF2;
      otherSum += BG2;
    }

    //weird bug
    //if(pollSliderPercentage > 7 && pollSliderPercentage < 64) {conservativeSum -= 1;}

    setConservativeData((values) => ({
      ...values,
      reform: conservativeSum,
    }));
    setLabourData((values) => ({
      ...values,
      reform: labourSum,
    }));
    setLiberalData((values) => ({
      ...values,
      reform: liberalSum,
    }));
    setReformData((values) => ({
      ...values,
      reform: reformSum,
    }));
    setGreenData((values) => ({
      ...values,
      reform: greenSum,
    }));
    setSnpData((values) => ({
      ...values,
      reform: snpSum,
    }));
    setPcData((values) => ({
      ...values,
      reform: pcSum,
    }));
    setOtherData((values) => ({
      ...values,
      reform: otherSum,
    }));

    let verdict = "",
      verdictColor = "blue";
    const verdictRange = Math.max(
      conservativeSum,
      labourSum,
      liberalSum,
      reformSum,
      greenSum,
      snpSum,
      pcSum,
      otherSum
    );
    if (labourSum > 325) {
      verdict = `Labour majority of ${(labourSum - 325) * 2}`;
      verdictColor = "red";
    } else if (conservativeSum > 325) {
      verdict = `Conservative majority of ${(conservativeSum - 325) * 2}`;
    } else {
      verdict = `Hung Parliament ${
        325 - verdictRange
      } seats needed for a majority`;
      verdictColor = "yellow";
    }

    setVerdict({ verdict: verdict, verdictColor: verdictColor });

    console.log(verdict);
  };

  useEffect(() => {
    setConservativeData((values) => ({
      ...values,
      reform: sumVotes(rawData[51]["Con"], "", true),
    }));
    setLabourData((values) => ({
      ...values,
      reform: sumVotes(rawData[52]["Lab"], "", true),
    }));
    setLiberalData((values) => ({
      ...values,
      reform: sumVotes(rawData[53]["Lib"], "", true),
    }));
    setReformData((values) => ({
      ...values,
      reform: sumVotes(rawData[54]["BRX"], "", true),
    }));
    setGreenData((values) => ({
      ...values,
      reform: sumVotes(rawData[55]["GRN"], "", true),
    }));
    setSnpData((values) => ({
      ...values,
      reform: sumVotes(rawData[56]["SNP"], "", true),
    }));
    setPcData((values) => ({
      ...values,
      reform: sumVotes(rawData[57]["PC"], "", true),
    }));
    setOtherData((values) => ({
      ...values,
      reform: sumVotes(rawData[58]["other"], "", true),
    }));
  }, []);

  return (
    <>
      {/*Predictor Section*/}
      <section className="predictor-section content-with-sidebar">
        {/*Sidebar Section*/}
        <div className="sidebar">
          <SideBarHeader />
          <div className="sidebar-main-container">
            <SideBarMainContent
              handlePollsTighten={handlePollsTighten}
              handlePollSliderChange={handlePollSliderChange}
              handleAntiTorySliderChange={handleAntiTorySliderChange}
              handleReformToggle={handleReformToggle}
              reformToggle={reformToggle}
            />
            <SideBarFooter />
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="intro-section">
            <div className="icon">
              <img src="Vote_Icon.svg" alt="Icon" />
            </div>

            <div className="text">
              <h3>THE ELECTION FORECAST</h3>

              <h4>
                This tool lets you test the possible outcomes at the general
                election based on three strategic questions: First, how much
                will polls change between now and polling day? Second, how much
                tactical voting will take place on polling day? Third, will
                Reform UK candidates pose a meaningful challenge to Conservative
                PPCs across the country? By answering these three questions,
                informed by precedent and the effect that these events have had
                in the past, you can forecast who the next Prime Minister will
                be, what type of government they will lead, and what kind of
                Parliament they will work with.
              </h4>
            </div>

            <div className="anchor-link">
              <a href="#predictor-anchor">VIEW THE PREDICTOR</a>
            </div>
          </div>

          {/*Data Table Section*/}
          <div className="data-table-section" id="predictor-anchor">
            <div className="data-table-headings">
              <div className="data-table-heading-col">
                <h3>
                  NUMBER OF SEATS
                  <br />
                  IN GREAT BRITAIN
                </h3>
              </div>

              <div className="data-table-heading-col">
                <span>
                  2019 Notional
                  <br />
                  Results
                </span>
              </div>

              <div className="data-table-heading-col">
                <span>
                  Nowcast
                  <br />
                  (Current Polling Avg)
                </span>
              </div>

              <div className="data-table-heading-col">
                <span>
                  Potential 2024
                  <br />
                  Election Result
                </span>
              </div>
            </div>
            <div className="data-table-row blue">
              <div className="data-table-col">
                <span>Conservative</span>
              </div>
              <div className="data-table-col">
                <span>{conservativeData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{conservativeData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{conservativeData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row red">
              <div className="data-table-col">
                <span>Labour</span>
              </div>
              <div className="data-table-col">
                <span>{labourData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{labourData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{labourData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row orange">
              <div className="data-table-col">
                <span>Liberal Democrats</span>
              </div>
              <div className="data-table-col">
                <span>{liberalData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{liberalData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{liberalData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row cyan">
              <div className="data-table-col">
                <span>Reform UK</span>
              </div>
              <div className="data-table-col">
                <span>{reformData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{reformData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{reformData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row lightgreen">
              <div className="data-table-col">
                <span>Green</span>
              </div>
              <div className="data-table-col">
                <span>{greenData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{greenData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{greenData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row yellow">
              <div className="data-table-col">
                <span>SNP</span>
              </div>
              <div className="data-table-col">
                <span>{snpData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{snpData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{snpData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row darkgreen">
              <div className="data-table-col">
                <span>Plaid Cymru</span>
              </div>
              <div className="data-table-col">
                <span>{pcData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{pcData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{pcData["reform"]}</span>
              </div>
            </div>
            <div className="data-table-row grey">
              <div className="data-table-col">
                <span>Other</span>
              </div>
              <div className="data-table-col">
                <span>{otherData["2019"]}</span>
              </div>
              <div className="data-table-col">
                <span>{otherData["nowCast"]}</span>
              </div>
              <div className="data-table-col">
                <span>{otherData["reform"]}</span>
              </div>
            </div>

            <VoteResult verdict={verdict} />
          </div>

          {/* <!-- Seat Tracker Section --> */}
          <div className="seat-tracker-section">
            <div className="seat-tracker-heading">
              <h2>
                GENERAL ELECTION <span>SEAT TRACKER</span>
              </h2>
            </div>

            {/* <!-- Seat Tracker Table Section --> */}
            <div className="data-table-section seat-tracker-data-section">
              <div className="data-table-headings seat-tracker-data-table-headings">
                <div className="data-table-heading-col">
                  <span>Number Of Seats</span>
                </div>
              </div>

              <div className="data-table-row blue seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Conservative</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${conservativeData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{conservativeData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row red seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Labour</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${labourData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{labourData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row orange seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Liberal Democrat</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${liberalData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{liberalData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row cyan seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Reform UK</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${reformData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{reformData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row lightgreen seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Green</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${greenData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{greenData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row yellow seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>SNP</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${snpData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{snpData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row darkgreen seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Plaid Cymru</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${pcData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{pcData["reform"]}</span>
                </div>
              </div>

              <div className="data-table-row grey seat-tracker-data-table-row">
                <div className="data-table-col">
                  <span>Other</span>
                </div>

                <div className="data-table-col result-bar">
                  <span style={{width: `${otherData["reform"]/632 * 100}%`}}></span>
                </div>

                <div className="data-table-col">
                  <span>{otherData["reform"]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
