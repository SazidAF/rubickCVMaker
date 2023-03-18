import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home}  />
      </Routes>
    </Router>
  );
}

export default App;
