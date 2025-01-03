
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="./screens/Login " element={<Login />} />
      
      {/* Add more routes here if needed */}
    </Routes>
  </Router>
  );
}

export default App;
