import { For, createSignal } from "solid-js";
import { getStoredRecords, getTimeDiffInSeconds } from "./utils";
import { Record, Weekday } from "./models";
import { A } from "@solidjs/router";
import { getStatsAverageTime, getStatsSuccessRate } from "./stats";

function Stat(props: { name: string; value: string }) {
  return (
    <span class="stat">
      {props.name}: <span class="stat-stat">{props.value}</span>
    </span>
  );
}

function RecordRow(props: { record: Record }) {
  const record = props.record;
  return (
    <tr
      class={
        record.given_answer === record.target_date.getDay()
          ? "correct"
          : "incorrect"
      }
    >
      <td>{record.target_date.toISOString().slice(0, 10)}</td>
      <td>{Weekday[record.target_date.getDay()]}</td>
      <td>{Weekday[record.given_answer]}</td>
      <td>
        {getTimeDiffInSeconds(record.start_time, record.end_time).toFixed(3)}s
      </td>
    </tr>
  );
}

function StatsPage() {
  const [records, _setRecords] = createSignal<Record[]>(getStoredRecords());

  return (
    <div>
      <h1>Stats</h1>
      <A href="/">Practice</A>
      <div id="stats-page">
        <div class="stats-bar">
          <Stat name="Total" value={records().length.toString()} />
          <Stat name="Success Rate" value={getStatsSuccessRate(records())} />
          <Stat name="Average Time" value={getStatsAverageTime(records())} />
          <Stat
            name="Average Time (Correct Only)"
            value={getStatsAverageTime(records(), true)}
          />
        </div>
        <br />

        <div class="records-list">
          <table>
            <thead>
              <tr>
                <th>Target Date</th>
                <th>Actual</th>
                <th>Guess</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <For each={records()}>
                {(record) => <RecordRow record={record} />}
              </For>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
