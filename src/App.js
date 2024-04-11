import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './Components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe';
import Dog from './Components/Dog/Dog';
import DartScorer from './Components/Darts/DartScorer';


function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home </Link>
        <Link to="/adele">About Me </Link>
        <Link to="/dog">Dog </Link>
        <Link to="/darts">Dart Scorer </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adele" element={<AboutMe />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/darts" element={<DartScorer />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
