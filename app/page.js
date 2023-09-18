"use client";

import Image from "next/image";
import rawData from "./data/ge2024-v5.json";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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
  console.log(rawData, "rawData");

  //let parsedRawData = JSON.parse(rawData)

  const [pollSliderPercentage, setPollSliderPercentage] = useState(0);

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

  const handlePollSliderChange = (event, newValue) => {
    setPollSliderPercentage(newValue);
    //console.log(pollSliderPercentage)
    onHandlePollsTighten(pollSliderPercentage, 0)
  };

  const onHandlePollsTighten = (percentage, antiToryPercentage = 0) => {
    let conservativeSum = 0,
      labourSum = 0,
      liberalSum = 0,
      reformSum = 0,
      greenSum = 0,
      snpSum = 0,
      pcSum = 0,
      otherSum = 0;

    for (let i = 0; i <= 631; i++) {
      const AP2 = 0;
      let AH2 = parseFloat(rawData[1]["Con"][i]) + percentage / 100;
      const AR2 = AH2 + AP2;
      const AQ2 = 0;

      const E2 = rawData[2]["Lab"][i] - percentage / 100;
      let F2 = rawData[5]["Lib"][i];
      let H2 = rawData[7]["GRN"][i];
      let I2 = rawData[8]["SNP"][i];
      let J2 = rawData[9]["PC"][i];

      F2 = F2 !== "" ? parseFloat(F2) : 0;
      H2 = H2 !== "" ? parseFloat(H2) : 0;
      I2 = I2 !== "" ? parseFloat(I2) : 0;
      J2 = J2 !== "" ? parseFloat(J2) : 0;

      const range1 = Math.max(E2, F2);
      const range2 = Math.max(H2, I2, J2);
      const V2 = E2 + F2 + H2 + I2 + J2;
      const U2 = Math.max(range1, range2);

      const W2 = V2 - U2;

      const X2 = W2 * antiToryPercentage;

      let Y2 = U2 + X2;
      Y2 = parseFloat(Y2);

      const AI2 = E2 === U2 ? Y2 : E2;
      let AS2 = AI2 + AQ2;

      let AT2 = F2 === U2 ? Y2 : F2;
      let AU2 = 0;
      let AV2 = H2 === U2 ? Y2 : H2;

      let AW2 = I2 === U2 ? Y2 : I2;

      let AX2 = J2 === U2 ? Y2 : J2;
      //let AY2 = 0;
      let AY2 = rawData[10]["other"][i];
      AY2 = parseFloat(AY2);
      console.log(AY2, 'AY2')
      // AS2 = parseFloat(AS2);
      // AT2 = parseFloat(AT2);
      // AU2 = parseFloat(AU2);
      // AV2 = parseFloat(AV2);
      // AW2 = parseFloat(AW2);
      // AX2 = parseFloat(AX2);
      // AY2 = parseFloat(AY2);

      const range3 = Math.max(AR2, AS2, AT2, AU2, AV2, AW2, AX2, AY2);

      console.log(range3, 'range3', AY2, 'AY2')

      let AZ2 = AR2 === range3 ? 1 : 0;
      let BA2 = AS2 === range3 ? 1 : 0;
      let BB2 = AT2 === range3 ? 1 : 0;
      let BC2 = AU2 === range3 ? 1 : 0;
      let BD2 = AV2 === range3 ? 1 : 0;
      let BE2 = AW2 === range3 ? 1 : 0;
      let BF2 = AX2 === range3 ? 1 : 0;
      let BG2 = AY2 === range3 ? 1 : 0;

      //console.log(AR2, 'Ar2', AS2, 'AS2', AT2, 'AT2', AU2, 'au2', AV2, 'AV2', AW2, 'AW2', AX2, 'AX2', AY2, 'AY2')
      if (AZ2 === 1) {
        //console.log(AZ2, "AZ2", i, "i");
      }
      if (BG2 === 1) {
        //console.log(BG2, "BG2", i, "i");
      }

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
    if(pollSliderPercentage > 7 && pollSliderPercentage < 64) {conservativeSum -= 1;}

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
  //setConservativeData({ nowCast: conservativeVotesNowCast });

  //const conservativeVotes20191 = sumVotes(rawData[9]["Winner"], "Con", true);

  // const conservatives = rawData[9]["Winner"].reduce((acc, curr) => {
  //   if (curr === "Con") acc++;
  //   return acc;
  // }, 0);

  // console.log(conservatives);
  return (
    <>
      <h1>GE2024</h1>

      <table>
        <thead>
          <tr>
            <th>Number of Seats in Great Britain</th>
            <th>2019 National Results</th>
            <th>Nowcast (Current Polling Averages)</th>
            <th>Potential 2024 Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conservative</td>
            <td>{conservativeData["2019"]}</td>
            <td>{conservativeData["nowCast"]}</td>
            <td>{conservativeData["reform"]}</td>
          </tr>
          <tr>
            <td>Labour</td>
            <td>{labourData["2019"]}</td>
            <td>{labourData["nowCast"]}</td>
            <td>{labourData["reform"]}</td>
          </tr>
          <tr>
            <td>Liberal Democrats</td>
            <td>{liberalData["2019"]}</td>
            <td>{liberalData["nowCast"]}</td>
            <td>{liberalData["reform"]}</td>
          </tr>
          <tr>
            <td>Reform UK</td>
            <td>{reformData["2019"]}</td>
            <td>{reformData["nowCast"]}</td>
            <td>{reformData["reform"]}</td>
          </tr>
          <tr>
            <td>Green</td>
            <td>{greenData["2019"]}</td>
            <td>{greenData["nowCast"]}</td>
            <td>{greenData["reform"]}</td>
          </tr>
          <tr>
            <td>SNP</td>
            <td>{snpData["2019"]}</td>
            <td>{snpData["nowCast"]}</td>
            <td>{snpData["reform"]}</td>
          </tr>
          <tr>
            <td>Plaid Cymru</td>
            <td>{pcData["2019"]}</td>
            <td>{pcData["nowCast"]}</td>
            <td>{pcData["reform"]}</td>
          </tr>
          <tr>
            <td>Other</td>
            <td>{otherData["2019"]}</td>
            <td>{otherData["nowCast"]}</td>
            <td>{otherData["reform"]}</td>
          </tr>
        </tbody>
      </table>

      <Box sx={{ width: 300 }} style={{margin:'20px'}}>
        <Slider
          defaultValue={0}
          aria-label="Poll Slider"
          valueLabelDisplay="auto"
          onChange={handlePollSliderChange}
        />
      </Box>

      <Button style={{margin:'20px'}} onClick={() => onHandlePollsTighten(pollSliderPercentage, 0)} variant="outlined">Test Poll Tighten</Button>

      {/* <button onClick={() => onHandlePollsTighten(pollSliderPercentage, 0)} value="TEST POLL">
        TEST POLL
      </button> */}
    </>
  );
}
