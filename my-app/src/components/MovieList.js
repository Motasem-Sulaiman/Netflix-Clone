import Movie from "./Movie";

function MovieList(props) {
  return (
    <>
      {props.movies.map((item, i) => {
        return <Movie key={i} movie={item} />;
      })}
    </>
  );
}

export default MovieList;
