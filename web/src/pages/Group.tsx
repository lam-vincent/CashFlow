import React, { useState } from "react";

const Group: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [newGroupName, setNewGroupName] = useState("");
  const [members, setMembers] = useState<string[]>([]);

  const handleCreateGroup = () => {
    // Perform create group logic here
    console.log("Creating a new group with name:", newGroupName);
  };

  const handleDeleteGroup = () => {
    // Perform delete group logic here
    console.log("Deleting group:", selectedGroup);
  };

  const handleAddMember = () => {
    // Perform add member logic here
    console.log("Adding member to group:", selectedGroup);
  };

  const handleRemoveMember = (member: string) => {
    // Perform remove member logic here
    console.log("Removing member from group:", member);
  };

  return (
    <div className="w-screen h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Group</h1>

      {/* Create Group */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="New Group Name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleCreateGroup}
          className="ml-2 px-4 py-2 rounded-md bg-green-500 text-white"
        >
          Create Group
        </button>
      </div>

      {/* Delete Group */}
      <div className="mb-4">
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="px-2 py-1 border rounded"
        >
          <option value="">Select a Group to Delete</option>
          {/* Replace this with options for existing groups */}
          <option value="group1">Group 1</option>
          <option value="group2">Group 2</option>
        </select>
        <button
          onClick={handleDeleteGroup}
          className="ml-2 px-4 py-2 rounded-md bg-red-500 text-white"
        >
          Delete Group
        </button>
      </div>

      {/* Add Member */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Member Name"
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={handleAddMember}
          className="ml-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Add Member
        </button>
      </div>

      {/* Display Members */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Group Members</h2>
        <ul>
          {members.map((member) => (
            <li key={member} className="flex justify-between">
              <span>{member}</span>
              <button
                onClick={() => handleRemoveMember(member)}
                className="px-2 py-1 rounded-md bg-red-500 text-white"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Group;
