import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
