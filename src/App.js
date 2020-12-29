import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

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
          <li>
            <Link to="/profiles">프로필 목록 </Link>
          </li>
          <li>
            <Link to="/history">히스토리 </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={HistorySample} />
          <Route
            render={({ location }) => {
              return (
                <div>
                  <h2>이 페이지는 존재 하지 않습니다. </h2>
                </div>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
