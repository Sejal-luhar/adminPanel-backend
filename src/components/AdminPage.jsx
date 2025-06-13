import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import Navbar from './Navbar';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get('/admin/users');
      setUsers(res.data);
    } catch (error) {
      alert('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axiosInstance.delete(`/admin/users/${id}`);
        setUsers(prev => prev.filter(user => user._id !== id));
        alert('User deleted successfully');
      } catch (error) {
        alert('Error deleting user');
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-white to-yellow-100 text-gray-800 px-6">
        <Navbar/>
      <h1 className="text-3xl font-bold my-6 text-center">Admin Dashboard</h1>

      {loading ? (
        <p className="text-center">Loading users...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-[80%] m-auto text-left table-auto border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-600">Email</th>
                <th className="px-4 py-2 border border-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-4">No users found</td>
                </tr>
              ) : (
                users.map(user => (
                  <tr key={user._id} className="hover:bg-gray-800 transition-all">
                    <td className="px-4 py-2 border border-gray-600">{user.username}</td>
                    <td className="px-4 py-2 border border-gray-600">{user.email}</td>
                    <td className="px-4 py-2 border border-gray-600">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-1"
                      >
                       Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
