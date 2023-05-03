import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
      <div>
          {/* <NavLink
            to={to}
            className={({ isActive, isPending }) =>isActive ? "bg-red-500": "" }
        >
           {children}
        </NavLink> */}
      </div>
    );
};

export default ActiveLink;