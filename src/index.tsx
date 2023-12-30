/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "./App";
import StatsPage from "./StatsPage";
import "./index.css";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Route path="/stats" component={StatsPage} />
      <Route path="*" component={App} />
    </HashRouter>
  ),
  root!,
);
