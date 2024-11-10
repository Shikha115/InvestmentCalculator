import React from "react";

function ResultsTable({ yearlyData, initialInvestment }) {
  // ============================================================
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  // ============================================================
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  item.savingsEndOfYear -
                    initialInvestment -
                    item.yearlyContribution * item.year
                )}
              </td>
              <td>
                {formatter.format(
                  initialInvestment + item.yearlyContribution * item.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultsTable;
