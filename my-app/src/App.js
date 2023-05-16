import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/Home'
import Navbarr from './components/Navbarr';
import FavList from './components/FavList ';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';


function App() {
  return (<>
  <Navbarr />
   <Router>
      
  <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/favlist" element={<FavList />} ></Route>
        </Routes>
  
      </Router>

  </>
  );
}

export default App;
