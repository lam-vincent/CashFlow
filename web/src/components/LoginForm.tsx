import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform validation here

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the JWT in local storage
        localStorage.setItem("jwtToken", data.token);
        // Redirect to "/" after successful login
        navigate("/");
      } else {
        // Handle login error
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto border p-8 rounded-lg bg-white"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in to TMDb</h2>

      <div className="mb-4">
        <input
          type="username"
          placeholder="Username"
          id="username"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-lg font-semibold hover:text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => navigate("/register")}
        className="text-center w-full underline mt-6 hover:text-blue-500"
      >
        register yet
      </button>
    </form>
  );
};

export default LoginForm;
