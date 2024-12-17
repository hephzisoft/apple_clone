import { FaPlayCircle } from "react-icons/fa";

const Announcement = () => {
  return (
    <div className="mt-[200px] mx-auto p-20 justify-around items-center  bg-black rounded-3xl w-[80%] flex">
      <div className="left-section">
        <h2 className="text-apple-text-white text-3xl font-bold">
          See the new <br /> MacBook Pro in action.
        </h2>

        <div className="buttons text-apple-blue gap-10 flex mt-10">
          <a href="#" className="flex items-center gap-2 text-lg">
            Watch the announcement <FaPlayCircle />
          </a>
          <a href="#" className="flex items-center gap-2 text-lg">
            Watch in ASL <FaPlayCircle />
          </a>
        </div>
      </div>
      <div className="right-section">
        <img
          src="/src/assets/images/announcement-hello.jpg"
          alt="Multicolored, bubble letter saying hello"
        />
      </div>
    </div>
  );
};

export default Announcement;
