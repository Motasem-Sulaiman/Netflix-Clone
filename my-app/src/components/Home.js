import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_URL}trending`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>

      <MovieList movies={movieData} />
    </>
  );
}

export default Home;
