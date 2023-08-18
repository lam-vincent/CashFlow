import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";
import Budgeting from "./pages/Budgeting";
import History from "./pages/History";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/group" element={<Group />} />
      <Route path="/budgeting" element={<Budgeting />} />
      <Route path="/history" element={<History />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
