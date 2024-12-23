import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const Highlights = () => {
  const highlights = [
    {
      src: "src/assets/videos/highlight1.mp4",
      text: `Built for Apple Intelligence.`,
      bottom: " Personal, private, powerful.¹",
    },
    {
      src: "src/assets/videos/highlight2.mp4",
      text: "M4, M4 Pro, and M4 Max. ",
      bottom: "Ready for whatever’s impossible.",
    },
    {
      src: "src/assets/images/highlights3.jpg",
      text: "Longest battery life ever in a Mac. ",
      bottom: "Up to 24 hours.³",
    },
    {
      src: "src/assets/images/highlight4.jpg",
      text: "Liquid Retina XDR display. ",
      bottom: "Bright beyond belief.",
    },
    {
      src: "src/assets/videos/highlight5.mp4",
      text: "12MP Center Stage camera. ",
      bottom: "Keeps you front and center.",
    },
  ];
  const [vidIndex, setVidIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-[200px] w-[80%] text-apple-text-white text-5xl font-bold   mx-auto">
      <h1 className="mb-10">Get the highlight. </h1>

      <div className="bg-black relative rounded-3xl  flex w-full h-auto">
        <motion.div className="h-[90vh] relative">
          {highlights[vidIndex].src.includes("/images/") ? (
            <motion.img
              animate={{}}
              src={highlights[vidIndex].src}
              className="h-full w-full object-cover rounded-3xl"
            />
          ) : (
            <motion.video
              autoPlay
              src={highlights[vidIndex].src}
              ref={videoRef}
              className={`h-full object-cover rounded-3xl w-full`}
              // onViewportEnter={() => videoRef.current?}
            ></motion.video>
          )}
          <p className="absolute top-10 left-10 font-bold text-3xl">
            {highlights[vidIndex].text} <br /> {highlights[vidIndex].bottom}
          </p>
        </motion.div>
        <motion.div
          className=" flex gap-3 absolute bottom-0 left-[40%]"
          animate={{ transition: { staggerChildren: 0.4 } }}
        >
          <motion.div className="bg-[#424245b3] flex gap-3 items-center justify-center h-14 w-44 rounded-full">
            {[...Array(highlights.length)].map((_, index) => (
              <motion.div
                onClick={() => setVidIndex(index)}
                key={index}
                className={` h-2 rounded-full bg-white cursor-pointer ${
                  index === vidIndex ? "w-10" : "w-2"
                }`}
              ></motion.div>
            ))}
          </motion.div>
          <motion.div className="bg-[#424245b3] text-white h-14 w-14 rounded-full flex items-center justify-center">
            <svg className="svg-icon play-icon" viewBox="0 0 56 56">
              <path d="M20.8,36V20c0-1.6,1-2.5,2.3-2.5c0.7,0,1.1,0.1,1.7,0.5l13.4,7.7c1.2,0.7,1.8,1.2,1.8,2.3 c0,1.1-0.6,1.6-1.8,2.3L24.8,38c-0.6,0.4-1,0.5-1.7,0.5C21.8,38.5,20.8,37.6,20.8,36"></path>
            </svg>
            <svg
              className="svg-icon pause-icon"
              fill="white"
              viewBox="0 0 56 56"
            >
              <path d="M23.9,38.5h-2.3c-1.3,0-2.3-1-2.3-2.2V19.7c0-1.3,1.1-2.3,2.3-2.2h2.3c1.3,0,2.3,1,2.3,2.2v16.5 C26.2,37.5,25.2,38.5,23.9,38.5 M34.4,38.5c1.3,0,2.3-1,2.3-2.2V19.7c0-1.3-1.1-2.3-2.3-2.2h-2.3c-1.3,0-2.3,1-2.3,2.2v16.5 c0,1.3,1.1,2.3,2.3,2.2H34.4z"></path>
            </svg>
            <svg className="svg-icon replay-icon" viewBox="0 0 56 56">
              <path d="M37.3,26.7c-1,0.1-1.8,1-1.8,2c0,4.1-3.4,7.4-7.5,7.4c-4.1,0-7.4-3.4-7.4-7.5c0-4.1,3.3-7.4,7.5-7.4l0.1,0l0.2,0l0.5,0 l-2.2,2.2c-0.8,0.8-0.8,2.1,0,2.9c0.7,0.7,1.9,0.8,2.7,0.2l0.2-0.2l5.3-5.3c0.7-0.7,0.8-1.9,0.2-2.7l-0.2-0.2l-5.3-5.3 c-0.8-0.8-2.1-0.8-2.8,0c0,0,0,0,0,0c-0.7,0.7-0.8,1.9-0.1,2.7l0.1,0.2l1.4,1.4l-0.5,0c-6.4,0.2-11.3,5.6-11.1,11.9 S22,40.5,28.4,40.2c6.2-0.2,11.1-5.3,11.1-11.5c0-1-0.8-1.9-1.8-2l-0.2,0L37.3,26.7z"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Highlights;
