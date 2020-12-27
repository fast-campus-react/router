import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
}

export default App;
