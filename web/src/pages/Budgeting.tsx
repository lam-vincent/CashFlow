import React, { useState } from "react";

const Budgeting: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [budgetLimit, setBudgetLimit] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);

  const handleCreateBudget = () => {
    // Perform create budget logic here
    console.log(
      "Creating a budget for category:",
      selectedCategory,
      "with limit:",
      budgetLimit
    );
  };

  const handleDeleteBudget = () => {
    // Perform delete budget logic here
    console.log("Deleting budget for category:", selectedCategory);
  };

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Budgeting</h1>

      {/* Create Budget */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select a Category</option>
          {/* Replace this with options for existing categories */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <input
          type="number"
          placeholder="Budget Limit"
          value={budgetLimit}
          onChange={(e) => setBudgetLimit(Number(e.target.value))}
          className="ml-2 px-2 py-1 border rounded"
        />
        <button
          onClick={handleCreateBudget}
          className="ml-2 px-4 py-2 rounded-md bg-green-500 text-white"
        >
          Create Budget
        </button>
      </div>

      {/* Delete Budget */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select a Category to Delete</option>
          {/* Replace this with options for existing categories */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <button
          onClick={handleDeleteBudget}
          className="ml-2 px-4 py-2 rounded-md bg-red-500 text-white"
        >
          Delete Budget
        </button>
      </div>

      {/* Display Budgets */}
      <div>
        <h2 className="text-xl font-semibold">Budgets</h2>
        {/* Replace this with your budget list component */}
        <div className="border rounded p-4">
          {/* Budget list content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
