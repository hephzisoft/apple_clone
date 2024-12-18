import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

const Highlights = () => {
  const highlights = [
    {
      src: "src/assets/videos/highlight1.mp4",
      text: `Built for Apple Intelligence.`,
      bottom: " Personal, private, powerful.1",
    },
    {
      src: "src/assets/videos/highlight2.mp4",
      text: "M4, M4 Pro, and M4 Max. ",
      bottom: "Ready for whatever’s impossible.",
    },
    {
      src: "src/assets/images/highlights3.jpg",
      text: "Longest battery life ever in a Mac. ",
      bottom: "Up to 24 hours.3",
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHighlight = highlights.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="mt-[200px] w-[80%] text-apple-text-white text-5xl font-bold   mx-auto">
      <h1 className="mb-10">Get the highlight. </h1>

      <div className="bg-black w-full h-screen">
        {currentHighlight.map(({ src, text, bottom }) => (
          <motion.div key={text} className="relative">
            <div className="rounded-full">
              {src.endsWith("mp4") ? (
                <motion.video
                  autoPlay
                  ref={videoRef}
                  onViewportEnter={() => videoRef.current?.play()}
                >
                  <source
                    src={src}
                    type="video/mp4"
                    className="rounded-full block object-cover"
                  />
                </motion.video>
              ) : (
                <motion.img
                  animate={{}}
                  src={src}
                  className="border inline-block"
                />
              )}
            </div>

            <p className="absolute top-10 left-10 font-bold text-3xl">
              {text} <br /> {bottom}
            </p>
          </motion.div>
        ))}

        <AnimatePresence>
          <motion.div className="controls  z-10 gap-1  flex items-center justify-center">
            {[...Array(highlights.length)].map((_, index) => (
              <motion.div
                onClick={() => handlePageChange(index + 1)}
                transition={{ delay: 2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={index}
                className="w-5 h-2 rounded-full cursor-pointer  bg-apple-text-white"
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Highlights;
