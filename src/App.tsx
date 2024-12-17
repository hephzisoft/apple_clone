import Announcement from "./components/Announcement";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Navbar />

      <Announcement />
      <Highlights />
    </>
  );
};

export default App;
