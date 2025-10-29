import { MdOutlineModeNight } from "react-icons/md";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { useState, useEffect } from "react";
import { LuSunMedium } from "react-icons/lu";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed top-0 left-0 right-0 mx-auto h-[70px] px-5 w-full
      shadow-lg text-white bg-blur-md dark:bg-black transition-colors duration-300
      ${sticky ? "backdrop-blur-md" : ""} `}
    >
      <div className="flex justify-between items-center h-full">
        <p className="font-bold text-[20px] text-black dark:text-white">Book Store</p>

        <div className="flex gap-5 items-center [&>*]:font-medium [&>*]:cursor-pointer ">
          <a className="px-3 py-2 bg-blue-800 rounded-lg" href="/">Home</a>
          <a className="px-3 py-2 bg-blue-800 rounded-lg" href="/course">Course</a>
          <a className="px-3 py-2 bg-blue-800 rounded-lg">Contact</a>
          <a className="px-3 py-2 bg-blue-800 rounded-lg">About</a>

          <input
            placeholder="search"
            className="border border-black dark:border-white bg-transparent text-black dark:text-white px-[5px] py-[6px] rounded-md"
          />

          <div className="text-black dark:text-white"onClick={() => setMode(!mode)}>
            {mode ? <LuSunMedium /> : <MdOutlineModeNight />}
          </div>

          <button className="px-4 py-2 rounded-lg text-white bg-black dark:bg-white dark:text-black">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;