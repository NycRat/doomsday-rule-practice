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

function RecordRow(props: { record: Record; deleteFunction: () => void }) {
  const record = props.record;
  return (
    <tr
      class={
        record.givenAnswer === record.targetDate.getDay()
          ? "correct"
          : "incorrect"
      }
    >
      <td>{record.targetDate.toISOString().slice(0, 10)}</td>
      <td>{Weekday[record.targetDate.getDay()]}</td>
      <td>{Weekday[record.givenAnswer]}</td>
      <td>
        {getTimeDiffInSeconds(record.startTime, record.endTime).toFixed(3)}s
      </td>
      <td class="delete-row" onClick={props.deleteFunction}>
        X
      </td>
    </tr>
  );
}

function StatsPage() {
  const [records, setRecords] = createSignal<Record[]>(getStoredRecords());

  function deleteRecord(i: number) {
    let newRecords = [...records()];
    newRecords.splice(i, 1);
    setRecords(newRecords);
    localStorage.setItem("records", JSON.stringify(records()));
  }

  return (
    <div>
      <h1>Stats</h1>
      <div class="links">
        <A href="/">Practice</A>
      </div>
      <div id="stats-page">
        <div class="stats-bar">
          <Stat name="Total" value={records().length.toString()} />
          <Stat name="Success Rate" value={getStatsSuccessRate(records())} />
          <Stat name="Average Time" value={getStatsAverageTime(records())} />
          <Stat
            name="Average Time (Correct)"
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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <For each={records()}>
                {(record, i) => (
                  <RecordRow
                    record={record}
                    deleteFunction={() => deleteRecord(i())}
                  />
                )}
              </For>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatsPage;
