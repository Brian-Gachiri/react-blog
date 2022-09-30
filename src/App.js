import './App.css';
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";

function App() {
  return (
      <Router>
        <Nav/>
          <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/articles' element={<Articles/>}/>
          </Routes>
      </Router>
  );
}

export default App;
