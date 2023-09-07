import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [netBalance, setNetBalance] = useState<number>(0);

  // You can fetch the data for total expenses, total income, and net balance here

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* Financial Overview */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Financial Overview</h2>
        <div className="flex justify-between mt-2">
          <div>
            <p>Total Expenses:</p>
            <p>Total Income:</p>
            <p>Net Balance:</p>
          </div>
          <div>
            <p>${totalExpenses.toFixed(2)}</p>
            <p>${totalIncome.toFixed(2)}</p>
            <p>${netBalance.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="flex justify-between mt-2">
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
            Log Expense
          </button>
          <button className="px-4 py-2 rounded-md bg-green-500 text-white">
            Log Income
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        {/* Replace this with your recent transactions component */}
        <div className="border rounded p-4">
          {/* Recent transactions content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
