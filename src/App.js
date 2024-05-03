import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './Components/Home';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe';
import Dog from './Components/Dog/Dog';
import DartScorer from './Components/Darts/DartScorer';
import PlayGame from './Components/Darts/PlayGame';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div className="App" >

      <Router>
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
  <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adele">About Me</Nav.Link>
            <Nav.Link href="/dog">Dog</Nav.Link>
            <Nav.Link href="/darts">Dart Scorer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adele" element={<AboutMe />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/darts" element={<DartScorer />} />
          <Route path="/darts/playgame/:id" element={<PlayGame />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
