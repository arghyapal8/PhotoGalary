import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Thumbnails from "./Component/Thumbnails/Thumbnails";
import Photo from "./Component/Photo/Photo";

function App() {
  return (
    <>
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Thumbnails</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route exact path="/"  element={<Thumbnails/>} >
          
          </Route>
          <Route path="/photo/:id"  element={<Photo/>} >
            
          </Route>
        </Routes>
      {/* </div> */}
    </Router>
    </>
  );
}

export default App;
