import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const sendReq = async () => {
    const serverUrl = `http://localhost:3001/trending`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <h1>Home Page</h1>

      <MovieList movies={movieData} />
    </>
  );
}

export default Home;
