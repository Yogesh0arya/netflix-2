import React, { useEffect } from "react";
import { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import data from "../../../data/titles.json";
import styles from "./Home.css";
import PopularMovie from "../../components/PopularMovie/PopularMovie";

function Home() {
  console.log(data);

  return (
    <div style={{ backgroundColor: "black" }}>
      <HeroSection movie={data.BannerMovie[0]} />
      <h1 style={{ color: "white", marginLeft: "10px" }}>Popular Movies</h1>
      <PopularMovie data={data.movies} id={"slide1"} />

      <h1 style={{ color: "white", marginLeft: "10px" }}>Popular Shows</h1>
      <PopularMovie data={data.shows} id={"slide2"} />
    </div>
  );
}

export default Home;
