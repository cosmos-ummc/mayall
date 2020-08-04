import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Title } from "./components";
import * as serviceWorker from "./service-worker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./routes/login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Switch>
          <Route
            path="/"
            render={(props) => <Title {...props} text={`landing page`} />}
            exact
          />
          <Login />
          <Route
            path="/register"
            render={(props) => <Title {...props} text={`register page`} />}
          />
          <Route render={(props) => <Title {...props} text={`404 page`} />} />
        </Switch>
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
