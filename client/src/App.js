import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home}  /> */}
      </Switch>
    </Router>
  );
}

export default App;
