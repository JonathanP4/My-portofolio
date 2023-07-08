import heroVector from "/hero-vector.svg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <header
      className={`${styles.hero} grid grid-cols-2 items-center dark: bg-slate-900`}
    >
      <h1 className="text-6xl leading-tight font-semibold text-teal-400 self-center w-3/4">
        Hi, I'm Jonathan Petersen, a web developer
      </h1>
      <figure>
        <img src={heroVector} alt="web developer vector" />
      </figure>
    </header>
  );
}

export default Hero;
