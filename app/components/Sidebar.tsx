// app/components/Sidebar.tsx
import { NavLink } from "@remix-run/react";
import * as React from 'react';

const Sidebar: React.FC = () => {
  // Your code here
  return (
    <>
      <div className="fixed w-64.5 bg-backg h-12 " />
      <div className="relative w-64.5 mt-12 bg-shad">
        <div className="w-64 bg-backg h-screen">
          <NavLink to="/tasklist" className="h-4 w-60 bg-shad text-white">
            Task List
          </NavLink>
        </div>
    </div></>
  );
};

export default Sidebar;
