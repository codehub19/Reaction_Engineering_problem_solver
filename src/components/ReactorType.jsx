import React from 'react';

const ReactorType = (handleReactorType) => {
  return (
    <>
        <select onSelect={handleReactorType} className="form-select" aria-label="Default select example">
        <option defaultValue>Select Reactor Type</option>
        <option value="Batch Reactor">Batch Reactor</option>
        <option value="Plug Flow Reactor">Plug Flow Reactor</option>
        <option value="CSTR or Mixed Flow Reactor">CSTR or Mixed Flow Reactor</option>
        </select>
    </>
  );
}

export default ReactorType;
