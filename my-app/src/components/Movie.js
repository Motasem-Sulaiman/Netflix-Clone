import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

import ModalMovie from "./ModalMovie";
function Movie(props) {
  const [flag, setFlag] = useState(false);

  const handleShow = () => {
    setFlag(true);
  };
  const handleClose = () => {
    setFlag(false);

  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary" onClick={handleShow}>
            add to favorite
          </Button>
        </Card.Body>
      </Card>
      <ModalMovie
        showFlag={flag}
        handleclose={handleClose}
        name={props.movie.title}
        img={`https://www.themoviedb.org/t/p/w220_and_h330_face/${props.movie.poster_path}`}
        date={props.movie.release_date}
      />
    </>
  );
}

export default Movie;
