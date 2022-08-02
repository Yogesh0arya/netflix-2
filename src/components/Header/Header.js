import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import data from "../../../data/titles.json";
import styles from "./Header.css";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const [yScroll, setYScroll] = useState(window.scrollY);

  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState(data.movies);

  const history = useHistory();

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);

    return function unMount() {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [yScroll]);

  useEffect(() => {
    const newData1 = data.movies.filter((val) => {
      if (input == "") {
        return val;
      } else if (val.title.toLowerCase().includes(input.toLowerCase())) {
        return val;
      }
    });

    const newData2 = data.shows.filter((val) => {
      if (input == "") {
        return val;
      } else if (val.title.toLowerCase().includes(input.toLowerCase())) {
        return val;
      }
    });
    setSearchData([...newData1, ...newData2]);

    // console.log(searchData);
  }, [input]);

  return (
    <div
      style={{
        backgroundColor: !colorChange ? "black" : "rgba(37,37,37,0.8)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        zIndex: 100,
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <img
        className={styles.logo}
        src="../../assets/images/logo.png"
        alt="logo"
        onClick={() => history.push("/")}
      />

      <div
        className={styles.searchBar}
        style={{
          backgroundColor: "rgba(35,35,35)",
          paddingTop: "4px",
          paddingLeft: "30px",
          paddingBottom: "2px",
          borderRadius: "5px",
          position: "relative",
          border: "1px solid rgba(200, 200, 200)",
          borderRadius: "20px",
        }}
      >
        <SearchIcon
          style={{
            width: "30px",
            position: "absolute",
            left: 0,
            top: 0,
            padding: "5px",
            color: "white",
          }}
        />
        <input
          className={styles.InputBar}
          style={{
            backgroundColor: "transparent",
            outline: "none",
            border: "none",
            color: "white",
          }}
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && input != "") {
              history.push({
                pathname: "/search",
                state: { searchData: searchData, input: input },
              });
              setInput("");
            }
          }}
        />
      </div>

      <img
        src="https://tse4.mm.bing.net/th?id=OIP.Qz_6_xtigETpBhXMP76jlgHaH5&pid=Api&P=0"
        className={styles.profile}
      />
    </div>
  );
}

export default Header;
