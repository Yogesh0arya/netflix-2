import React from "react";
import styles from "./PopularMovie.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router";

function PopularMovie({ data, id }) {
  const history = useHistory();
  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div
      id={id}
      style={{
        position: "relative",
        display: "flex",
        padding: "10px 5px",
        backgroundColor: "black",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
      className={styles.slider}
    >
      <div
        onClick={slideLeft}
        className={styles.rightScroll}
        style={{
          backgroundColor: "white",
          padding: "2px",
          boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.5)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
        }}
      >
        <ChevronLeftIcon />
      </div>
      {data.map((movie) => {
        return (
          <div
            className={styles.card}
            onClick={() =>
              history.push({
                pathname: "/movie",
                state: { movie: movie },
              })
            }
          >
            <img
              style={{
                height: "300px",
              }}
              src={movie.img}
            />
          </div>
        );
      })}
      <div
        onClick={slideRight}
        className={styles.leftScroll}
        style={{
          backgroundColor: "white",
          padding: "2px",
          boxShadow: "3px 3px 3px 3px rgba(0,0,0,0.5)",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
        }}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default PopularMovie;
