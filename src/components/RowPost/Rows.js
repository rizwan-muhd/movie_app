import React, { useEffect, useState } from "react";
import axios from "axios";

// import { imgUrl, API_KEY } from "../constants/Constants";
import "./Row.css";
function RowPost() {
  const [movie, setMovie] = useState([]);
  //   //   const [urlId, setUrlId] = useState("");
  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    try {
      console.log("enter in func");
      // Retrieve token from local storage
      const token = localStorage.getItem("accessToken");

      // Check if token exists
      if (!token) {
        console.log("Token not found in local storage");
        // window.location = "/login";
        return;
      }

      // Set Authorization header with bearer token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make GET request with Axios
      const response = await axios.get(
        "http://localhost:8001/api/movies/getMovies",
        config
      );
      // Handle response
      console.log(response.data);
      setMovie(response.data.movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };
  console.log("movie", movie);
  return (
    <React.Fragment>
      <div>
        {movie.map((category, index) => (
          <div key={index}>
            <h2 className="category-title">{category._id}</h2>
            <div className="posters">
              {category.movies.map((movie, movieIndex) => (
                <img
                  key={movieIndex}
                  className="smallPosters"
                  src={movie.backdrop}
                  alt={movie.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default RowPost;
