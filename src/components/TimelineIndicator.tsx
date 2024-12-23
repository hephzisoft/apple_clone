// import { useAnimation, motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const TimelineIndicator = ({ progress, handlePlayPause }) => {
//   const control = useAnimation();
//   const sliderRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     if (progress > 0) {
//       control.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.3, type: "spring" },
//       });
//     } else {
//       control.start({
//         opacity: 0,
//         y: 20,
//         transition: { duration: 0.3, type: "spring" },
//       });
//     }
//   }, [progress, control]);

//   useEffect(() => {
//     if (isPlaying) {
//       control.start("playing");
//     } else {
//       control.start("paused");
//     }
//   }, [isPlaying, control]);

//   const handlePause = () => {
//     setIsPlaying(!isPlaying);
//     handlePlayPause();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={control}
//       className="fixed left-0 bottom-5 w-full flex justify-center"
//     >
//       <div className="bg-[#424245b3] rounded-full flex items-center py-2 px-5 min-w-[40%]">
//         <div
//           ref={sliderRef}
//           className="flex-1 h-[5px] bg-white/30 rounded-full mr-4 relative"
//         >
//           <motion.div
//             animate={{
//               scaleX: progress,
//             }}
//             style={{ originX: 0 }}
//             className="absolute top-0 left-0 h-full bg-white rounded-full"
//           ></motion.div>
//         </div>
//         <div className="flex mr-5">
//           <span className="w-[3px] h-[3px] bg-white/60 rounded-full mx-1" />
//           <span className="w-[3px] h-[3px] bg-white/60 rounded-full mx-1" />
//           <span className="w-[3px] h-[3px] bg-white/60 rounded-full mx-1" />
//           <span className="w-[3px] h-[3px] bg-white/60 rounded-full mx-1" />
//         </div>
//         <motion.button
//           onClick={handlePause}
//           variants={{
//             paused: { opacity: 1 },
//             playing: { opacity: 0.3 },
//           }}
//           transition={{ duration: 0.3, type: "spring" }}
//           className="bg-transparent border-none cursor-pointer"
//         >
//           {isPlaying ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="currentColor"
//               className="bi bi-pause-fill"
//               viewBox="0 0 16 16"
//             >
//               {" "}
//               <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />{" "}
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="currentColor"
//               className="bi bi-play-fill"
//               viewBox="0 0 16 16"
//             >
//               {" "}
//               <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />{" "}
//             </svg>
//           )}
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default TimelineIndicator;
