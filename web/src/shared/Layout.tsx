import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/group">Group</Link>
            </li>
            <li>
              <Link to="/budgeting">Budgeting</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            {/* Add conditional rendering for authentication status */}
          </ul>
        </nav>
      </header>
      <main>
        {/* Display page-specific content */}
        <Outlet />
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Layout;
