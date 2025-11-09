"use client";

import React from "react";
import { MdClose } from "react-icons/md";

const Sidenav = ({ isOpen, onClose }) => {
  return (
    <div id="Sidenav" className={isOpen ? "open" : ""}>
      <div className="SidenavContent">
        {/* Close Icon */}
        <MdClose className="closeIcon" onClick={onClose} />
        
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
