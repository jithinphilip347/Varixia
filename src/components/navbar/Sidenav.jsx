// "use client";

// import React from "react";
// import { MdClose } from "react-icons/md";

// const Sidenav = ({ isOpen, onClose }) => {
//   const handleScrollToSection = (id) => {
//     const section = document.querySelector(id);
//     if (section) {
//       const offset = 80; 
//       const topPosition = section.offsetTop - offset;
//       window.scrollTo({ top: topPosition, behavior: "smooth" });
//       onClose(); 
//     }
//   };

//   const menuItems = [
//     { name: "Home", link: "#HomeBanner" },
//     { name: "About", link: "#HomeAbout" },
//     { name: "Service", link: "#HomeService" },
//     { name: "Contact", link: "#HomeContact" },
//   ];

//   return (
//     <div id="Sidenav" className={isOpen ? "open" : ""}>
//       <div className="SidenavContent">
//         {/* Close Icon */}
//         <MdClose className="closeIcon" onClick={onClose} />

//         <ul>
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <a
//                 href={item.link}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleScrollToSection(item.link);
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidenav;


"use client";

import React from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", link: "/", isHash: true, targetId: "#HomeBanner" },
    { name: "About", link: "/#HomeAbout", isHash: true, targetId: "#HomeAbout" },
    { name: "Service", link: "/#HomeService", isHash: true, targetId: "#HomeService" },
    { name: "Blogs", link: "/blog", isHash: false }, // Added Blog Link
    { name: "Contact", link: "/#HomeContact", isHash: true, targetId: "#HomeContact" },
  ];

  const handleNavClick = (e, item) => {
   
    if (item.isHash && pathname === "/") {
      e.preventDefault();
      const section = document.querySelector(item.targetId);
      if (section) {
        const offset = 80;
        const topPosition = section.offsetTop - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
      onClose(); // Close the sidenav after scrolling
    } else {
    
      onClose();
    }
  };

  return (
    <div id="Sidenav" className={isOpen ? "open" : ""}>
      <div className="SidenavContent">
        {/* Close Icon */}
        <MdClose className="closeIcon" onClick={onClose} />

        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;