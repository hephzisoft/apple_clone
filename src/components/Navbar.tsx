import { FaApple } from "react-icons/fa";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Bag from "../assets/images/bag.svg";
import HeroAppleIntelligence from "../assets/images/hero_apple_intelligence.png";
import Search from "../assets/images/search.svg";

const Navbar = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const [showShowNav, setShowNewNav] = useState(false);

  useEffect(() => {
    // Show navbar when scrollY > 100, hide it when scrollY <= 100
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > (60 / 100) * window.innerHeight) {
        setShowNewNav(true);
      } else {
        setShowNewNav(false);
      }
    });

    // Cleanup subscription when the component unmounts
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <nav className="mx-auto flex h-[44px] items-center justify-center gap-10 bg-black px-5 py-2 font-medium text-apple-text-white">
        <div className="logo">
          <FaApple color="#fff" size={18} />
        </div>

        <ul className="flex items-center text-apple-text-gray justify-center gap-10 font-light text-xs">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>Airpods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>

        <div className="flex gap-10">
          <button className="">
            <img src={Search} alt="search" />
          </button>
          <button>
            <img src={Bag} alt="bag" />
          </button>
        </div>
      </nav>

      <div className="hero h-[120vh] bg-black pt-[120px] pb-[130px] relative  flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold  text-apple-text-white absolute top-[18.5%] z-10">
          MacBook Pro
        </h2>
        <img
          src={HeroAppleIntelligence}
          alt="hero-apple-intelligence"
          className="object-cover absolute top-[8%] z-10"
        />

        <div className="video-animation mt-5 absolute top-[20%]">
          <motion.video
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => videoRef.current.play()}
            onViewportLeave={() => videoRef.current.pause()}
            ref={videoRef}
            muted
          >
            <source
              src="/src/assets/videos/opening-macbook.mp4"
              type="video/mp4"
            />
          </motion.video>
        </div>
        <div className="lower top-[60%] absolute text-apple-text-gray flex flex-col items-center justify-center gap-5">
          <button className="bg-apple-blue px-7 text-lg py-3 font-semibold text-apple-text-white rounded-full">
            Buy
          </button>
          <h2 className="text-2xl font-bold">
            From $1599 or $133.25/mo. for 12 mo.*
          </h2>
          <p className="text-lg font-semibold">
            Apple Intelligence Now Available
          </p>
        </div>
      </div>

      {/* <div className="fixed top-0 bg-blue-300 w-full h-96">hello</div> */}
      <AnimatePresence>{showShowNav && <NewNav />}</AnimatePresence>
    </>
  );
};

export default Navbar;

const NewNav = () => {
  return (
    <motion.div
      className="new-nav w-full h-10 bg-blue-500-500 py-6 z-20 fixed flex items-center justify-around bg-apple-bg-gray border-b border-white text-white"
      initial={{ opacity: 0, top: -50 }}
      animate={{ opacity: 1, top: 0 }}
      exit={{ opacity: 0, top: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold">MacBook Pro</h2>

      <div className="end flex gap-10 items-center">
        <ul className="flex gap-10">
          <li className="hover:border-b border-white py-2">Overview</li>
          <li className="hover:border-b border-white py-2">Tech Spec</li>
          <li className="hover:border-b border-white py-2">Compare</li>
          <li className="hover:border-b border-white py-2">
            Switch from PC to Mac
          </li>
        </ul>

        <button className="bg-apple-blue w-12 h-7 rounded-full">Buy</button>
      </div>
    </motion.div>
  );
};
