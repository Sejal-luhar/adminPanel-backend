
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components//Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './components/AdminPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/admin" element={<AdminPage/>} />

        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
};

export default App;


// src/components/ProtectedRoute.js





// src/pages/Login.js



// src/pages/Dashboard.js



// src/pages/Profile.js

