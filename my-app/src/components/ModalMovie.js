import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import axios from "axios";

import { useState } from "react";
function ModalMovie(props) {
  const [savedData,setSavedData]=useState("");
  async function addToDataBase(){
 const url=`${process.env.REACT_APP_URL}addMovie` 
 const data = {

    title:props.name,
    release_date:props.date,
    poster_path: props.img,
    comments: savedData,
};

 await axios.post(url,data)

setSavedData("")
props.handleclose()

  }
  const handleCommentChange = (e) => {
    setSavedData(e.target.value);
  };
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.img} alt="cant show the pic!" />
          <br></br>
          <br></br>
          <label>Add Comment</label>
          <input type="text" onChange={handleCommentChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleclose}>
            Close
          </Button>
          <Button variant="primary" onClick={addToDataBase}>Add to the favorite</Button>
        </Modal.Footer>
      </Modal>
    
    </>
    
  );
}

export default ModalMovie;
