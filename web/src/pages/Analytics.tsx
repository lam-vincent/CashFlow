import React, { useState } from "react";

const Analytics: React.FC = () => {
  const [selectedFriend, setSelectedFriend] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [balanceByFriend, setBalanceByFriend] = useState<number>(0);

  const handleSelectFriend = () => {
    // Perform select friend logic here
    console.log("Selected friend:", selectedFriend);
  };

  const handleSelectTag = () => {
    // Perform select tag logic here
    console.log("Selected tag:", selectedTag);
  };

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>

      {/* Select Friend */}
      <div className="mb-4">
        <select
          value={selectedFriend}
          onChange={(e) => setSelectedFriend(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select a Friend</option>
          {/* Replace this with options for existing friends */}
          <option value="friend1">Friend 1</option>
          <option value="friend2">Friend 2</option>
        </select>
        <button
          onClick={handleSelectFriend}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Select
        </button>
      </div>

      {/* Select Tag */}
      <div className="mb-4">
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select a Tag</option>
          {/* Replace this with options for existing tags */}
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
        </select>
        <button
          onClick={handleSelectTag}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Select
        </button>
      </div>

      {/* Display Balance */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Balance by Friend</h2>
        <p>
          {selectedFriend}'s Balance: ${balanceByFriend.toFixed(2)}
        </p>
      </div>

      {/* Display Analytics */}
      <div>
        <h2 className="text-xl font-semibold">Analytics Data</h2>
        {/* Replace this with your analytics data component */}
        <div className="border rounded p-4">
          {/* Analytics data content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
