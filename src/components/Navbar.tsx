import { FaApple } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mx-auto flex h-[44px] items-center justify-center gap-10 bg-black text-apple-text-gray">
      <div className="logo">
        <FaApple color="#fff" size={18} />
      </div>

      <ul className="flex items-center justify-center gap-10 font-light text-xs">
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

      <div className="flex">
        <button className="">
          <img src="../assets/images/search.svg" alt="search" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
