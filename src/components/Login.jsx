import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import { jwtDecode } from 'jwt-decode';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/users/login', formData);
      const token = res.data.token;

      // Save token to localStorage
      localStorage.setItem('token', token);

      // Decode the token
      const decoded = jwtDecode(token);
      console.log('Decoded JWT:', decoded); // For debugging

      // Optional: Save user info to localStorage if needed
      localStorage.setItem('user', JSON.stringify(decoded));

      // Navigate based on role
      setTimeout(() => {
        if (decoded.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/dashboard');
        }
      }, 100);

    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-white to-yellow-100 px-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Log In 
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b17f44]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b17f44]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#b17f44] text-white font-semibold hover:bg-[#9e6e3b] transition duration-200"
            >
              Login
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{' '}
              <Link to="/" className="text-[#b17f44] font-medium hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
