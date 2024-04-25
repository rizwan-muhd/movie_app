import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import { API_KEY, imgUrl } from "../constants/Constants";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 20)]);
        console.log(response.data.results[2]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="condent">
        <h1 className="movie-title">{movie ? movie.title : ""}</h1>
        <div className="buttons">
          <button className="play-button">Play</button>
          <button className="list-button">+My list</button>
        </div>
        <p className="movie-description">{movie ? movie.overview : ""} </p>
      </div>
      <div className="fade_botton"></div>
    </div>
  );
}

export default Banner;
