import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

function App() {
  // ==========================================================================
  const [yearlyData, setYearlyData] = useState([]); // per-year results
  const [userData, setUserData] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log(userInput);
    setUserData(userInput);

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    const yearData = [];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearData);

    // do something with yearlyData ...
    {
      console.log(yearlyData);
    }
  };

  const reset = (val) => {
    val ? setYearlyData([]) : setYearlyData(yearlyData);
  };
  // ==========================================================================

  return (
    <div>
      <Header />

      <UserInput calculateHandler={calculateHandler} resetTable={reset} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {yearlyData && yearlyData.length > 0 ? (
        <ResultsTable
          yearlyData={yearlyData}
          initialInvestment={userData.currentSavings}
        />
      ) : (
        <p className="fallback">No data availble</p>
      )}
    </div>
  );
}

export default App;
