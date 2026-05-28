import { useEffect, useState } from "react";
import "../css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function toggleMenu() {
    setMenuOpen((previousValue) => !previousValue);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      const scrollHeightThreshold = 50;

      if (window.scrollY > scrollHeightThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Run once when page first loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full h-[100px] flex items-center justify-center">
      <nav
        className={`fixed z-999 w-full ${scrolled ? "scrolled bg-white" : ""}`}
        id="nav"
      >
        <div className="navbar-container relative px-5 p-3 min-h-[100px] flex justify-center md:justify-start items-center backdrop-blur-sm bg-white/10">
          <div
            id="nav-logo"
            className="h-[40px] aspect-square mx-4 flex justify-center items-end relative"
          >
            <img
              id="cat-head"
              className="h-[100%] object-cover"
              src="/images/logo-cat.png"
              alt=""
            />
            <img
              id="star"
              src="/images/dark-star.svg"
              className="absolute top-[-10px] right-[-10px]  w-[16px] "
              alt=""
            />

            <span
              className="absolute top-[-5px] left-[-10px] w-[32px] opacity-0"
              id="light-cat"
            >
              <img src="/images/light-cat.gif" className="" alt="" />
            </span>
          </div>
          <div
            id="nav-links"
            className={`absolute top-full right-0 md:relative md:!h-fit w-full md:w-fit bg-white/90 md:bg-transparent ${
              menuOpen ? "show" : ""
            }`}
          >
            <ul className="p-5 flex flex-col md:flex-row gap-5 font-[450] tracking-[2px] text-shadow-lg/15">
              <li>
                <a href="/" className="py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/photography" className="py-2">
                  Photography
                </a>
              </li>
              <li>
                <a href="/about" className="py-2">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="py-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <button
            id="hamburger"
            type="button"
            className="absolute w-[88%] flex justify-end items-center md:hidden"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <div className="relative flex flex-col gap-1 w-[42px] cursor-pointer">
              <span className="flex">
                <img
                  className="w-[25px] object-contain"
                  src="/images/dark-cat.gif"
                  alt=""
                />
                <span className="flex flex-col gap-[5px] w-full pt-[2px]">
                  <span className="inline-block w-[calc(100%+5px)] h-[3px] bg-dark relative right-1"></span>
                  <span className="inline-block w-full h-[3px] bg-dark"></span>
                  <span className="inline-block w-[calc(100%+2px)] h-[3px] relative right-0.5 bg-dark"></span>
                </span>
              </span>
            </div>
          </button>
        </div>
        <span
          id="nav-line"
          className={`absolute bottom-0 left-1/2 right-1/2 translate-x-[-50%] h-[1px] w-[90%] bg-dark md:!opacity-0 ${
            menuOpen ? "show" : ""
          }`}
        ></span>
      </nav>

      <button
        id="blur-filter"
        type="button"
        onClick={closeMenu}
        className={`fixed top-0 right-0 w-[100vw] h-[100vh] backdrop-blur-[3px] ${
          menuOpen ? "show" : ""
        }`}
        aria-label="Close navigation menu"
      ></button>

      <div id="nav-padding" className="w-full h-[100px]"></div>
    </header>
  );
}
