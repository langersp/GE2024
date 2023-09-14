"use client";

import Image from "next/image";
import rawData from "./data/GE2024-v3.json";
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
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [labourData, setLabourData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [liberalData, setLiberalData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [greenData, setGreenData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [reformData, setReformData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [snpData, setSnpData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [otherData, setOtherData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  const [pcData, setPcData] = useState({
    2019: 0,
    nowCast: 0,
    reform: 0,
  });

  useEffect(() => {
    setConservativeData({
      2019: sumVotes(rawData[9]["Winner"], "Con", false),
      nowCast: sumVotes(rawData[19][""], "", true),
      reform: sumVotes(rawData[75][""], "", true),
    });
    setLabourData({
      2019: sumVotes(rawData[9]["Winner"], "Lab", false),
      nowCast: sumVotes(rawData[20][""], "", true),
      reform: sumVotes(rawData[76][""], "", true),
    });
    setLiberalData({
      2019: sumVotes(rawData[9]["Winner"], "LD", false),
      nowCast: sumVotes(rawData[21][""], "", true),
      reform: sumVotes(rawData[77][""], "", true),
    });
    setReformData({
      2019: sumVotes(rawData[9]["Winner"], "Ref", false),
      nowCast: sumVotes(rawData[22][""], "", true),
      reform: sumVotes(rawData[78][""], "", true),
    });
    setGreenData({
      2019: sumVotes(rawData[9]["Winner"], "Green", false),
      nowCast: sumVotes(rawData[23][""], "", true),
      reform: sumVotes(rawData[79][""], "", true),
    });
    setSnpData({
      2019: sumVotes(rawData[9]["Winner"], "SNP", false),
      nowCast: sumVotes(rawData[24][""], "", true),
      reform: sumVotes(rawData[80][""], "", true),
    });
    setPcData({
      2019: sumVotes(rawData[9]["Winner"], "PC", false),
      nowCast: sumVotes(rawData[25][""], "", true),
      reform: sumVotes(rawData[81][""], "", true),
    });
    setOtherData({
      2019: sumVotes(rawData[9]["Winner"], "Other", false),
      nowCast: sumVotes(rawData[26][""], "", true),
      reform: sumVotes(rawData[82]["Oth"], "", true),
    });
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
            <th>Nowcast (Current Polling Avg)</th>
            <th>Plus Reform UK Stand Aside</th>
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
