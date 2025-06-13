import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-100 text-white px-8">
        <Navbar/>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold my-6">Welcome to your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Your Activity</h2>
            <p className="text-gray-400">Track your recent logins, changes, and activities.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-2">Account Stats</h2>
            <p className="text-gray-400">Overview of account usage and settings.</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>No unread notifications</li>
              <li>New feature updates released</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
