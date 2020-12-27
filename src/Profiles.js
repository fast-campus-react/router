import React from "react";
import Profile from "./Profile";
import { Link, Route, Router } from "react-router-dom";

function Profiles() {
  return (
    <div>
      <h3> 사용자 목록 </h3>

      <ul>
        <li>
          <Link to="/profiles/velopert">Velopert</Link>
        </li>
        <li>
          <Link to="/profiles/homer">homer</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      ></Route>
        <Route
        path="/profiles/:username"
        exact
        component={Profile}
      ></Route>
    </div>
  );
}

export default Profiles;
