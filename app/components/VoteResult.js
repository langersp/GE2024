"use client";

const VoteResult = ({verdict}) => {
  return (
    <div className="data-table-result">
      <span>RESULT</span>

      <img src="Star.svg" alt="Star" />

      <span>{verdict}</span>
    </div>
  );
};

export default VoteResult;
