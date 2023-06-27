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
    <nav className={styles.nav}>
      <div
        className={`${styles.logoArea} flex items-center gap-2 text-[#27ddbf]`}
      >
        <a href="#">
          <Logo />
        </a>
        <span>Jonathan | Web Developer</span>
      </div>
      <div>
        <ul className={`${styles.navigationList} text-[--colors-text-gray]`}>
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
