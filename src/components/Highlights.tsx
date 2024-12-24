import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "../assets/icons/play.svg";
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
          <motion.div className="bg-[#424245b3] ">
            <img src={Play} alt="repeat" className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Highlights;
