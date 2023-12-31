/* @refresh reload */
import { render } from "solid-js/web";
import { HashRouter, Route } from "@solidjs/router";
import App from "./App";
import StatsPage from "./StatsPage";
import "./index.css";
import OptionsPage from "./OptionsPage";

const root = document.getElementById("root");

render(
  () => (
    <HashRouter>
      <Route path="/stats" component={StatsPage} />
      <Route path="/options" component={OptionsPage} />
      <Route path="*" component={App} />
    </HashRouter>
  ),
  root!,
);
