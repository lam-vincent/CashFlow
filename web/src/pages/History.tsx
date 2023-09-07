import React, { useState } from "react";

const History: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDate, setFilterDate] = useState("");
  const [filterAmount, setFilterAmount] = useState("");

  const handleSearchByTitle = () => {
    // Perform search by title logic here
    console.log("Searching by title:", searchTitle);
  };

  const handleSearchByTag = () => {
    // Perform search by tag logic here
    console.log("Searching by tag:", searchTag);
  };

  const handleFilterStatus = (status: string) => {
    // Perform status filter logic here
    console.log("Filtering by status:", status);
    setFilterStatus(status);
  };

  const handleFilterDate = () => {
    // Perform date filter logic here
    console.log("Filtering by date:", filterDate);
  };

  const handleFilterAmount = () => {
    // Perform amount filter logic here
    console.log("Filtering by amount:", filterAmount);
  };

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">History</h1>

      {/* Search by Title */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleSearchByTitle}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Search
        </button>
      </div>

      {/* Search by Tag */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Tag"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleSearchByTag}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Search
        </button>
      </div>

      {/* Filter by Status */}
      <div className="mb-4">
        <select
          value={filterStatus}
          onChange={(e) => handleFilterStatus(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Filter by Date */}
      <div className="mb-4">
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleFilterDate}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Filter
        </button>
      </div>

      {/* Filter by Amount */}
      <div className="mb-4">
        <input
          type="number"
          placeholder="Filter by Amount"
          value={filterAmount}
          onChange={(e) => setFilterAmount(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleFilterAmount}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Filter
        </button>
      </div>

      {/* Display History Table */}
      {/* Replace this with your history table component */}
      <div className="border rounded p-4">
        {/* History table content goes here */}
      </div>
    </div>
  );
};

export default History;
