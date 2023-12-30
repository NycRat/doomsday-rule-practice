/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import StatsPage from "./StatsPage";
import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <Router base="/doomsday-rule-practice">
      <Route path="/stats" component={StatsPage} />
      <Route path="*" component={App} />
    </Router>
  ),
  root!,
);
