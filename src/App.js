import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe';
import Dog from './Components/Dog/Dog';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home </Link>
        <Link to="/adele">About Me </Link>
        <Link to="/dog">Dog</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adele" element={<AboutMe />} />
          <Route path="/dog" element={<Dog />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
