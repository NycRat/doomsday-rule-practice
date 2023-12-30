import { createSignal } from "solid-js";
import { getRandomDate } from "./utils";

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

interface Record {
  start_time: Date;
  end_time: Date;
  target_date: Date;
  given_answer: Weekday;
}

function get_new_record(): Record {
  const startDate = new Date("0000-01-01");
  const endDate = new Date("3000-12-31");

  const randomDate = getRandomDate(startDate, endDate);

  console.log(randomDate);
  return {
    start_time: new Date(),
    end_time: new Date(),
    target_date: randomDate,
    given_answer: Weekday.Sunday,
  };
}

function App() {
  const [curRecord, setCurRecord] = createSignal<Record>(get_new_record());
  const [inputValue, setInputValue] = createSignal("");

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    let day: Weekday = parseInt(inputValue());
    if (day == curRecord().target_date.getDay()) {
      console.log(day);
      alert("correct");
    } else {
      alert(`incorrect was ${curRecord().target_date.getDay()}`);
    }

    setCurRecord(get_new_record());
    setInputValue("");
  }

  return (
    <>
      <h1>Doomsday Rule</h1>
      <div id="center-thingy">
        <h2>{curRecord().target_date.toLocaleDateString()}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Answer:
            <input
              type="text"
              value={inputValue()}
              onInput={(e) => setInputValue(e.target.value)}
            />
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
