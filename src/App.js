import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here if needed */}
    </Routes>
  </Router>
  );
}

export default App;
