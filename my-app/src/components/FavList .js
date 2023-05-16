import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState,useEffect } from "react";

function FavList() {
  const [movieData, setMovieData] = useState([]);
  const [comment, setMovieComment] = useState("");
 
  
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_URL}getMovies`;
    const result = await axios.get(serverUrl);
    setMovieData(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

 async function handleDelete(i){
  const movieToDelete = movieData[i];
  const serverUrl = `${process.env.REACT_APP_URL}delete/${movieToDelete.id}`;
await axios.delete(serverUrl);



  sendReq();


  }
  async function handleUpdate(i){
    const movieToUpdate = movieData[i];
    const serverUrl = `${process.env.REACT_APP_URL}update/${movieToUpdate.id}`;
let newData={
comments:comment

}
await axios.put(serverUrl,newData)
setMovieComment("")
sendReq();

}
const handleCommentChange = (e) => {
  setMovieComment(e.target.value);
};
  
  return <>
  
  {movieData.map((item,i)=>{


return<Card style={{ width: "18rem" ,marginLeft:'600px'}} key={i} >
<Card.Img
  variant="top"
  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
/>
<Card.Body  >
  <Card.Title>{item.title}</Card.Title>
  <Card.Text><p>Comments:</p>{item.comments}</Card.Text>
 
  <input type="text"   name="comments" onChange={handleCommentChange}/>
  <Button variant="primary"  style={{margin:'10px'}} onClick={()=>{handleUpdate(i)}}>Update Comment</Button>

  <Button variant="danger" style={{margin:'10px'}} onClick={()=>{handleDelete(i)}}>Delete Movie</Button>

</Card.Body>
</Card>







  })}
  
  
  
  
  
  
  
  </>;
}

export default FavList;
