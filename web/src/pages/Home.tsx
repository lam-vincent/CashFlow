import React, { useState } from "react";

const Home: React.FC = () => {
  const [connected, setConnected] = useState(false);

  const toggleConnection = () => {
    setConnected(!connected);
  };

  return (
    <div className="w-screen h-screen p-4 flex flex-col items-center justify-center">
      <header className="flex items-center justify-center mb-4 w-screen">
        <img src="/logo.png" alt="CashFlow Logo" className="h-12 w-12 mr-2" />
        <h1 className="text-2xl font-bold">CashFlow</h1>

        {/* Navbar */}
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li className="text-blue-500 hover:underline">Home</li>
            <li className="text-blue-500 hover:underline">Explore</li>
            <li className="text-blue-500 hover:underline">Get Help</li>
          </ul>
        </nav>

        {/* Connect/Disconnect Button */}
        <button
          className={`px-4 py-2 rounded-md ${
            connected ? "bg-red-500" : "bg-green-500"
          } text-white`}
          onClick={toggleConnection}
        >
          {connected ? "Disconnect" : "Connect"}
        </button>
      </header>

      {/* Catchphrase */}
      <p className="text-center mt-4 text-lg">
        Making financial management easier.
      </p>

      {/* Sub-text */}
      <p className="text-center mt-2 text-gray-500">
        Your trusted partner for tracking expenses and income.
      </p>

      {/* Explore and Get Help Buttons */}
      <div className="mt-4 flex space-x-4">
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
          Explore
        </button>
        <button className="px-4 py-2 rounded-md bg-yellow-500 text-white">
          Get Help
        </button>
      </div>

      {/* Card Section */}
      <div className="mt-8 flex space-x-4">
        {/* Card 1 */}
        <div
          className="w-1/3 rounded-lg h-48"
          style={{
            backgroundImage: `url('image1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between p-4">
            <h2 className="text-white font-semibold">Card 1</h2>
            <button className="text-white">&#8594;</button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="w-1/3 rounded-lg h-48"
          style={{
            backgroundImage: `url('image2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between p-4">
            <h2 className="text-white font-semibold">Card 2</h2>
            <button className="text-white">&#8594;</button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="w-1/3 rounded-lg h-48"
          style={{
            backgroundImage: `url('image3.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between p-4">
            <h2 className="text-white font-semibold">Card 3</h2>
            <button className="text-white">&#8594;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
