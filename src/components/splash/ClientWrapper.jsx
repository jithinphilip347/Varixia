// "use client";
// import React, { useState, useEffect } from "react";
// import SplashScreen from "./SplashScreen";

// const ClientWrapper = ({ children }) => {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShowSplash(false), 4000);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <>
//       <div style={{ display: showSplash ? "block" : "none" }}>
//         <SplashScreen onFinish={() => setShowSplash(false)} />
//       </div>

//       <div
//         style={{
//           opacity: showSplash ? 0 : 1,
//           transition: "opacity 0.6s ease-in-out",
//         }}
//       >
//         {children}
//       </div>
//     </>
//   );
// };

// export default ClientWrapper;
