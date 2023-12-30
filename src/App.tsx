import { createSignal } from "solid-js";
import { getNewRecord, getStoredRecords, getTimeDiffInSeconds } from "./utils";
import { Record, Weekday } from "./models";
import { A } from "@solidjs/router";

function App() {
  const [records, setRecords] = createSignal<Record[]>(getStoredRecords());
  const [curRecord, setCurRecord] = createSignal<Record>(getNewRecord());
  const [inputValue, setInputValue] = createSignal("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    let day: Weekday = parseInt(inputValue());
    if (isNaN(day) || day < 0 || day > 6) {
      return;
    }

    let record: Record = {
      ...curRecord(),
      end_time: new Date(),
      given_answer: day,
    };

    if (day !== record.target_date.getDay()) {
      alert("Incorrect, was " + Weekday[record.target_date.getDay()]);
    }

    setRecords([record, ...records()]);
    setCurRecord(getNewRecord());
    setInputValue("");
    window.localStorage.setItem("records", JSON.stringify(records()));
  }

  setInterval(() => {
    setCurRecord({
      ...curRecord(),
      end_time: new Date(),
    });
  }, 1);

  return (
    <>
      <nav>
        <h1>Doomsday Rule</h1>
        <A href="/stats">Stats</A>
      </nav>

      <div id="center-thingy">
        <h2>{curRecord().target_date.toLocaleDateString()}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={inputValue()}
              placeholder="Day of week (0-6)"
              onInput={(e) => setInputValue(e.target.value)}
            />
          </label>
        </form>
        {getTimeDiffInSeconds(
          curRecord().start_time,
          curRecord().end_time,
        ).toFixed(3)}
        s
      </div>
    </>
  );
}

export default App;
