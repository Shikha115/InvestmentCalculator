import React, { useState } from "react";

function UserInput({ calculateHandler, resetTable }) {
  // ==========================================================================
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearSaving, setYearSaving] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [duration, setDuration] = useState("");

  const reset = () => {
    setCurrentSaving("");
    setYearSaving("");
    setExpectedInterest("");
    setDuration("");
    resetTable(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      currentSavings: +currentSaving,
      yearlyContribution: +yearSaving,
      expectedReturn: +expectedInterest,
      duration: +duration,
    };
    calculateHandler(data);
  };
  // ==========================================================================
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => setCurrentSaving(e.target.value)}
            value={currentSaving}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) => setYearSaving(e.target.value)}
            value={yearSaving}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => setExpectedInterest(e.target.value)}
            value={expectedInterest}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
