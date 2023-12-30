import { For, createSignal } from "solid-js";
import { getStoredRecords, getTimeDiffInSeconds } from "./utils";
import { Record, Weekday } from "./models";

function StatsPage() {
  const [records, _setRecords] = createSignal<Record[]>(getStoredRecords());

  return (
    <div>
      <h1>Stats</h1>
      <a href="/">Practice</a>
      <div id="center-thingy">
        <For each={records()}>
          {(record) => (
            <div>
              {Weekday[record.given_answer]}
              {" - "}
              {Weekday[record.target_date.getDay()]}(
              {record.target_date.toLocaleDateString()}) (
              {getTimeDiffInSeconds(record.start_time, record.end_time)}s)
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default StatsPage;
