"use client";

import Image from "next/image";
import rawData from "./data/ge2024-v4.json";
import { useState, useEffect } from "react";

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
    </>
  );
}
