import { createSignal, onCleanup, onMount } from "solid-js";
import { getNewRecord, getStoredOptions, getStoredRecords, getTimeDiffInSeconds } from "./utils";
import { Options, Record, Weekday, InputMode } from "./models";
import { A } from "@solidjs/router";

function App() {
  const [records, setRecords] = createSignal<Record[]>(getStoredRecords());
  const [curRecord, setCurRecord] = createSignal<Record>(getNewRecord());
  const [inputValue, setInputValue] = createSignal("Day of week (0-6)");

  const options: Options = getStoredOptions();

  function handleSubmit() {
    if (inputValue() === "r") {
      setCurRecord(getNewRecord());
      setInputValue("Day of week (0-6)");
      return;
    }

    let day: Weekday = parseInt(inputValue());
    if (isNaN(day) || day < 0 || day > 7) {
      return;
    }

    day = day % 7;

    let record: Record = {
      ...curRecord(),
      endTime: new Date(),
      givenAnswer: day,
    };

    if (day !== record.targetDate.getDay()) {
      alert("Incorrect, was " + Weekday[record.targetDate.getDay()]);
    }

    setRecords([record, ...records()]);
    setCurRecord(getNewRecord());
    setInputValue("Day of week (0-6)");
    localStorage.setItem("records", JSON.stringify(records()));
  }

  function handleKeypress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      handleSubmit();
    }
    if (parseInt(e.key) >= 0 && parseInt(e.key) <= 7) {
      setInputValue(e.key);
    }
    if (e.key === "r") {
      setInputValue(e.key);
    }
  }

  onMount(() => {
    const id = setInterval(() => {
      const newRecord = {
        ...curRecord(),
        endTime: new Date(),
      };

      // if (getTimeDiffInSeconds(newRecord.startTime, newRecord.endTime)) {
      // }

      setCurRecord(newRecord);
    });

    addEventListener("keypress", handleKeypress);

    onCleanup(() => {
      clearInterval(id);
      removeEventListener("keypress", handleKeypress);
    });
  });

  return (
    <>
      <h1>Doomsday Rule</h1>
      <div class="links">
        <A href="/stats">Stats</A>
        <A href="/options">Options</A>
      </div>

      <div id="center-thingy">
        <h2>
          {options.blindTime === 0 ||
          options.blindTime >
            getTimeDiffInSeconds(curRecord().startTime, curRecord().endTime)
            ? curRecord().targetDate.toISOString().slice(0, 10)
            : "____-__-__"}
        </h2>
        {options.inputMode === InputMode.TextInput ? (
          <div
            class={"input" + (inputValue().length !== 1 ? " placeholder" : "")}
          >
            {inputValue()}
          </div>
        ) : (
          <div></div>
        )}
        {getTimeDiffInSeconds(
          curRecord().startTime,
          curRecord().endTime,
        ).toFixed(3)}
        s
      </div>
    </>
  );
}

export default App;
