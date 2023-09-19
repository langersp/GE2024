"use client";

const VoteResult = ({ verdict }) => {
  return (
    <div className={`data-table-result ${verdict.verdictColor}`}>
      <span>RESULT</span>

      <img src="Star.svg" alt="Star" />

      <span>{verdict.verdict}</span>
    </div>
  );
};

export default VoteResult;
