import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AddMember from './AddMember';
import MemberProfile from './MemberProfile'; 
import ClusterMembers from './ClusterMembers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-member" element={<AddMember />} />
        
        {/* <--- 2. Add the route for the list here */}
        <Route path="/members" element={<ClusterMembers />} /> 
        
        <Route path="/member/:id" element={<MemberProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;