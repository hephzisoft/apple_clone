import { motion } from "framer-motion";

const Highlights = () => {
  const highlights = [
    {
      src: "src/assets/videos/highlight1.mp4",
      text: `Built for Apple Intelligence. <br> Personal, private, powerful.1`,
    },
    {
      src: "src/assets/videos/highlight2.mp4",
      text: "M4, M4 Pro, and M4 Max.<br> Ready for whatever’s impossible.",
    },
    {
      src: "src/assets/images/highlights3.jpg",
      text: "Longest battery life ever in a Mac.<br> Up to 24 hours.3",
    },
    {
      src: "src/assets/images/highlight4.jpg",
      text: "Liquid Retina XDR display.<br> Bright beyond belief.",
    },
    {
      src: "src/assets/videos/highlight5.mp4",
      text: "12MP Center Stage camera. <br> Keeps you front and center.",
    },
  ];
  return (
    <div className="mt-[200px] w-[80%] text-apple-text-white text-5xl font-bold  mx-auto">
      <h1>Get the highlight. </h1>

      <div className="bg-black w-full h-[80%]">
        {highlights.map(({ src, text }) => (
          <motion.div key={text} className="relative ">
            <div className="rounded-3xl w-full">
              {src.endsWith("mp4") ? (
                <video>
                  <source
                    src={src}
                    type="video/mp4"
                    className="object-cover rounded-3xl"
                  />
                </video>
              ) : (
                <img src={src} className="object-cover rounded-3xl" />
              )}
            </div>

            <p>{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
