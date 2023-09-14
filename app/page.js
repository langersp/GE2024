"use client";

import Image from "next/image";
import rawData from "./data/GE2024-v3.json";

function sumVotes(party) {
  return party.reduce((accumulator, currentValue) => {
    currentValue = parseInt(currentValue);

    if (currentValue) {
      return accumulator + currentValue;
    } else {
      return accumulator;
    }
  }, 0);
}

export default function Page() {
  console.log(rawData, 'rawData')
  const conservativeVotes2019 = sumVotes(rawData[19][""]);
  const labourVotes2019 = sumVotes(rawData[20][""]);
  const liberalVotes2019 = sumVotes(rawData[21][""]);
  const reformVotes2019 = sumVotes(rawData[22][""]);
  const greenVotes2019 = sumVotes(rawData[23][""]);
  const snpVotes2019 = sumVotes(rawData[24][""]);
  const pcVotes2019 = sumVotes(rawData[25][""]);
  const otherVotes2019 = sumVotes(rawData[26][""]);

  

 const conservatives = rawData[9]["Winner"].reduce((acc,curr) => {
  if(curr === "Con")
     acc++;
  return acc;
},0);

console.log(conservatives)
  return (
    <>
      <h1>GE2024</h1>

      <table style={{ backgroundColor: "#eee", cellPadding: "20px" }}>
        <thead>
          <tr>
            <th>Number of Seats in Great Britain</th>
            <th>2019 National Results</th>
            <th>Nowcast (Current Polling Avg)</th>
            <th>If Polls Tighten (Historic Avg)</th>
            <th>Plus Anti-Tory Tactical Voting</th>
            <th>Plus Reform UK Stand Aside</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Conservative</td>
            <td>{conservativeVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Labour</td>
            <td>{labourVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Liberal Democrats</td>
            <td>{liberalVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Reform UK</td>
            <td>{reformVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Green</td>
            <td>{greenVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>SNP</td>
            <td>{snpVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Plaid Cymru</td>
            <td>{pcVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Other</td>
            <td>{otherVotes2019}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
