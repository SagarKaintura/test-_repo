import React from 'react';

import { Routes, Route, Link } from "react-router-dom";
import Admin from './Components/Admin.jsx';
import User from './Components/User.jsx';

export default function App(){
const linkStyle = {
   marginRight: '16px',
   padding: '8px 16px',
   textDecoration: 'none',
   color: '#fff',
   backgroundColor: '#007bff',
   borderRadius: '4px',
   fontWeight: 'bold'
};

return (
   <div>
     <h1>home rendered👍</h1>
      <nav className='flex justify-center my-4 p-4 align-center bg-gray-200'>
         <Link to="/Admin" style={linkStyle}>Admin</Link>
         <Link to="/User" style={linkStyle}>User</Link>
      </nav>
      <Routes>
         <Route path="/Admin" element={<Admin/>} />
         <Route path="/User" element={<User/>} />
      </Routes>
   </div>
);
}