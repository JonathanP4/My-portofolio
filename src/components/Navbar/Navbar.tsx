import { BaseSyntheticEvent } from "react";
import scrollIntoView from "scroll-into-view";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  function scrollToElement(e: BaseSyntheticEvent, offset = -30) {
    e.preventDefault();
    const elId = e.target.dataset.scroll;
    const el = document.getElementById(elId) as HTMLElement;

    // for reference about this lib https://www.npmjs.com/package/scroll-into-view
    scrollIntoView(el, {
      time: 100,
      align: {
        top: 1,
        topOffset: offset,
        lockX: true,
      },
    });
  }

  return (
    <nav className="bg-white/60 flex justify-between backdrop-blur sticky top-0 py-4 px-8 items-center z-50">
      <div
        className={`${styles.logoArea} flex items-center gap-2 text-teal-400 `}
      >
        <a href="#">
          <Logo />
        </a>
        <span className="text-sm">Jonathan | Web Developer</span>
      </div>
      <div>
        <ul
          className={`${styles.navigationList} flex items-center gap-8 text-slate-600 font-medium `}
        >
          <li>
            <a onClick={scrollToElement} href="#about" data-scroll="about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={scrollToElement} href="#skills" data-scroll="skills">
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={(e) => scrollToElement(e, 220)}
              href="#projects"
              data-scroll="projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a onClick={scrollToElement} href="#socials" data-scroll="socials">
              Socials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
