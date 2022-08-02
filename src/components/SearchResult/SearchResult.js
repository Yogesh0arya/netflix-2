import React from "react";
import { useHistory, useLocation } from "react-router";

import styles from "././SearchResult.css";

function SearchResult() {
  const location = useLocation();
  const history = useHistory();

  const data = location.state.searchData;

  return (
    <div className={styles.searchContiner}>
      <h1>serach result</h1>
      <div className={styles.imageContiner}>
        {data.map((movie) => {
          return (
            <div
              onClick={() =>
                history.push({
                  pathname: "/movie",
                  state: { movie: movie },
                })
              }
            >
              <img className={styles.imageCard} src={movie.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchResult;
