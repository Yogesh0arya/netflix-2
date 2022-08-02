import React from "react";
import { useLocation } from "react-router";
import HeroSection from "../HeroSection/HeroSection";
import styles from "./Movie.css";

function Movie() {
  const location = useLocation();

  const movie = location.state.movie;

  return (
    <div className={styles.movieContiner}>
      <img src={movie.img} className={styles.movie_img} />
      <div className={styles.movie_detail}>
        <h1
          style={{
            borderBottom: "1px solid grey",
            padding: "5px",
            fontSize: "3rem",
          }}
        >
          {movie.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            lineHeight: 0,
          }}
        >
          <h2>Season {movie.seasons}</h2>
          <h3>({movie.year})</h3>
        </div>

        <h2 style={{ lineHeight: 0, color: "red" }}>age {movie.ageGroup}</h2>
        <p>{movie.description}</p>
        <div
          style={{
            display: "flex",
            gap: "0 15px",
            marginBottom: "20px",
            flexWrap: "wrap",
            lineHeight: "0",
          }}
        >
          {movie.cast.map((cas) => (
            <p>&rdquo;{cas}&rdquo; </p>
          ))}
        </div>

        <div style={{ display: "flex", gap: "20px", color: "red" }}>
          {movie.genres.map((genre) => (
            <h3>{genre}</h3>
          ))}
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "8px 50px",
              borderRadius: "20px",
              backgroundColor: "red",
              color: "white",
              cursor: "pointer",
            }}
          >
            Watch Now
          </button>
          <button
            style={{
              padding: "8px 30px",
              borderRadius: "20px",
              border: "1px solid red",
              color: "white",
              backgroundColor: "black",
              cursor: "pointer",
            }}
          >
            + My List
          </button>
        </div>

        <div
          style={{
            marginTop: "10px",
            width: "300px",
            height: "8px",
            borderRadius: "4px",
            backgroundColor: "red",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolte",
              left: 0,
              width: "100px",
              borderRadius: "4px",
              backgroundColor: "white",
              height: "8px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            color: "white",
            marginTop: "50px",
          }}
        >
          {movie.type.map((ty) => (
            <h3
              style={{
                padding: "8px 30px",
                border: "1px solid white",
                color: "white",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            >
              {ty}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
