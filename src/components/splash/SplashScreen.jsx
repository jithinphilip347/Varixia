// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

// const SplashScreen = ({ onFinish }) => {
//   const splashRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const split = new SplitText(textRef.current, { type: "chars" });
//       const chars = split.chars;

//       // Animate each letter
//       gsap.fromTo(
//         chars,
//         { opacity: 0, y: 80, scale: 0.8 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.6,
//           stagger: 0.1,
//           ease: "power3.out",
//         }
//       );

//       // Center letter "I" zoom
//       const centerIndex = Math.floor(chars.length / 2);
//       gsap.to(chars[centerIndex], {
//         scale: 1.6,
//         duration: 0.8,
//         ease: "power2.inOut",
//         delay: 1.2,
//         yoyo: true,
//         repeat: 1,
//       });

//       // Fade splash out
//       gsap.to(splashRef.current, {
//         opacity: 0,
//         y: -100,
//         duration: 1.2,
//         delay: 2.8,
//         ease: "power4.inOut",
//         onComplete: () => onFinish && onFinish(),
//       });
//     }, splashRef);

//     return () => ctx.revert();
//   }, [onFinish]);

//   return (
//     <div ref={splashRef} className="splash-screen">
//       <h1 ref={textRef} className="splash-text">
//         VARIXIA
//       </h1>
//     </div>
//   );
// };

// export default SplashScreen;
