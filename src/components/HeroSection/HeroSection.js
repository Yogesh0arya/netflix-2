import React from "react";
import styles from "./HeroSection.css";

function HeroSection({ movie }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className={styles.banner}
      style={{
        backgroundImage: `url(${movie.img})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>{movie.title}</h1>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_btn1}>Play</button>
          <button className={styles.banner_btn2}>! More info</button>
        </div>
        <h3 className={styles.banner_des}>
          {truncate(movie.description, 150)}
        </h3>

        <h2>{movie.year}</h2>
        <h2 className={styles.banner_age}>{movie.ageGroup}</h2>
      </div>

      <div className={styles.banner_fade} />
    </header>
  );
}

export default HeroSection;
