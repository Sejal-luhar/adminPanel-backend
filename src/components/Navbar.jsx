import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const Navbar = () => {
  const navigate = useNavigate();

  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    axiosInstance.post("/users/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl italic font-bold text-[#eff16b]">AdminPanel</div>

        <div className="flex gap-6 items-center text-sm md:text-base">
          {/* Conditionally render dashboard link */}
          {user?.isAdmin ? (
            <Link to="/admin" className="hover:text-[#b17f44] transition">Admin Dashboard</Link>
          ) : (
            <Link to="/dashboard" className="hover:text-[#b17f44] transition">Dashboard</Link>
          )}

          <Link to="/profile" className="hover:text-[#b17f44] transition">Profile</Link>
          <button
            onClick={handleLogout}
            className="bg-[#b17f44] hover:bg-[#9e6e3b] px-4 py-2 rounded-md text-white transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
