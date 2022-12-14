import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
      <Router>
        <Nav/>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
          </Routes>
      </Router>
  );
}

export default App;
