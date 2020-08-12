import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./service-worker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Complete, Chat, Reschedule, Meetup, MainPage, Register, Login, ChatRoom, Schedule} from "./components";
import ScheduleNone from "./components/schedule-none/schedule-none";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={MainPage} exact />
          {/*<Route path="/chat" component={ChatRoom} />*/}
          <Route path="/chat" component={Chat} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/schedule-none" component={ScheduleNone} />
          <Route path="/meetup" component={Meetup} />
          <Route path="/reschedule" component={Reschedule} />
          <Route path="/complete" component={Complete} />


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
