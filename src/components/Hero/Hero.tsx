import heroVector from "/hero-vector.svg";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <header className={styles.hero}>
      <h1>Hi, I'm Jonathan Petersen, a web developer</h1>
      <figure>
        <img src={heroVector} alt="web developer vector" />
      </figure>
    </header>
  );
}

export default Hero;
