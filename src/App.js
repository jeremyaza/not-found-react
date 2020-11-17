import React, { Suspense } from "react";
import { routers } from "./utils/routers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Loading from "./components/loading/Loading";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routers.map((element, index) => (
            <Route key={index} exact={element.exact} path={element.path} component={element.component} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
