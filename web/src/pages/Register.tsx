import React, { useState } from "react";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Perform registration logic here
    console.log(
      "Registering with username:",
      username,
      "email:",
      email,
      "and password:",
      password
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-2 py-1 border rounded mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-2 py-1 border rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-2 py-1 border rounded mb-2"
      />
      <button
        onClick={handleRegister}
        className="px-4 py-2 rounded-md bg-green-500 text-white"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
