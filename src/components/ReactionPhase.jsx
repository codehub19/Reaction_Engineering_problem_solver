import React from 'react';

const ReactionPhase = () => {
  return (
    <>
        <select className="form-select" aria-label="Default select example">
        <option defaultValue>Select Reaction Phase</option>
        <option value="Gas">Gas</option>
        <option value="liquid">Liquid</option>
        </select>
    </>
  );
}

export default ReactionPhase;
