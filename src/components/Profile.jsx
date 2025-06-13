import React from 'react';
import Navbar from './Navbar';

const Profile = () => {
  const user = {
    username: 'sejal_luhar',
    email: 'sejal@example.com',
    role: 'User',
    joined: 'June 2025',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-100 text-white ">
        <Navbar/>
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-lg my-8 p-8">
        <h1 className="text-3xl font-bold mb-6 border-b pb-3">My Profile</h1>

        <div className="space-y-5">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Username</span>
            <span className="text-gray-300">{user.username}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Email</span>
            <span className="text-gray-300">{user.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Role</span>
            <span className="text-gray-300">{user.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Member Since</span>
            <span className="text-gray-300">{user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
