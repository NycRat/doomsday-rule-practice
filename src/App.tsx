import { createSignal, onCleanup, onMount } from "solid-js";
import {
  getFormattedDate,
  getNewRecord,
  getStoredOptions,
  getStoredRecords,
  getTimeDiffInSeconds,
} from "./utils";
import { Options, Record, Weekday, InputMode, DateDisplayMode } from "./models";
import { A } from "@solidjs/router";
import InputButton from "./InputButton";
import GithubLogo from "./github-mark.svg";

function App() {
  const placeholderText = "Day of week (0-6)";

  const options: Options = getStoredOptions();

  const [records, setRecords] = createSignal<Record[]>(getStoredRecords());
  const [curRecord, setCurRecord] = createSignal<Record>(
    getNewRecord(options.dateRangeYearStart, options.dateRangeYearEnd),
  );
  const [inputValue, setInputValue] = createSignal(placeholderText);

  setNewRecord();

  function speak(text: string) {
    if (options.textToSpeech) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      synthesis.speak(utterance);
    }
  }

  function setNewRecord() {
    const newRecord = getNewRecord(
      options.dateRangeYearStart,
      options.dateRangeYearEnd,
    );
    speak(
      newRecord.targetDate.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    );
    setCurRecord(newRecord);
    setInputValue(placeholderText);
  }

  function handleSubmit() {
    if (inputValue() === "r") {
      setNewRecord();
      setInputValue(placeholderText);
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
    setNewRecord();
    localStorage.setItem("records", JSON.stringify(records()));
  }

  function handleKeypress(e: KeyboardEvent) {
    if (options.inputMode === InputMode.ButtonInput) {
      return;
    }
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
        <h2
          class={
            options.dateDisplayMode === DateDisplayMode.MonthDDYYYY
              ? "full"
              : ""
          }
        >
          {options.blindTime === 0 ||
          options.blindTime >
            getTimeDiffInSeconds(curRecord().startTime, curRecord().endTime)
            ? getFormattedDate(
                curRecord().targetDate,
                options.dateDisplayMode,
                options.dateDisplaySlashes,
              )
            : "___________"}
        </h2>
        {(options.inputMode === InputMode.TextInput ||
          options.inputMode === InputMode.TextButtonInput) && (
          <div
            class={"input" + (inputValue().length !== 1 ? " placeholder" : "")}
          >
            {inputValue()}
          </div>
        )}
        {(options.inputMode === InputMode.ButtonInput ||
          options.inputMode === InputMode.TextButtonInput) && (
          <div class="input-buttons">
            <div>
              <InputButton
                text={Weekday[0] + ` (0)`}
                onClick={() => {
                  setInputValue("0");
                  handleSubmit();
                }}
              />
              <InputButton
                text={Weekday[1] + ` (1)`}
                onClick={() => {
                  setInputValue("1");
                  handleSubmit();
                }}
              />
              <InputButton
                text={Weekday[2] + ` (2)`}
                onClick={() => {
                  setInputValue("2");
                  handleSubmit();
                }}
              />
              <InputButton
                text={Weekday[3] + ` (3)`}
                onClick={() => {
                  setInputValue("3");
                  handleSubmit();
                }}
              />
            </div>
            <div>
              <InputButton
                text={Weekday[4] + ` (4)`}
                onClick={() => {
                  setInputValue("4");
                  handleSubmit();
                }}
              />
              <InputButton
                text={Weekday[5] + ` (5)`}
                onClick={() => {
                  setInputValue("5");
                  handleSubmit();
                }}
              />
              <InputButton
                text={Weekday[6] + ` (6)`}
                onClick={() => {
                  setInputValue("6");
                  handleSubmit();
                }}
              />
              <InputButton
                text={"Reset"}
                onClick={() => {
                  setNewRecord();
                }}
              />
            </div>
          </div>
        )}
        {getTimeDiffInSeconds(
          curRecord().startTime,
          curRecord().endTime,
        ).toFixed(3)}
        s
      </div>
      <a
        class="github-link"
        href="https://github.com/nycrat/doomsday-rule-practice"
      >
        <img src={GithubLogo} alt="Github Repo" />
      </a>
    </>
  );
}

export default App;
