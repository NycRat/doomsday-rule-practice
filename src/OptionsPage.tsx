import { A } from "@solidjs/router";
import { DateDisplayMode, InputMode, Options } from "./models";
import { createEffect, createSignal } from "solid-js";
import { clamp, getStoredOptions } from "./utils";

function OptionsPage() {
  const [options, setOptions] = createSignal<Options>(getStoredOptions());

  createEffect(() => {
    localStorage.setItem("options", JSON.stringify(options()));
  }, [options]);

  function updateDateEnd(yearStr: string) {
    let year = parseInt(yearStr.replace(/[^0-9]/g, ""));
    year = clamp(year, 0, 99999);
    year = clamp(year, options().dateRangeYearStart, 99999);
    if (year && !isNaN(year)) {
      setOptions({ ...options(), dateRangeYearEnd: year });
    } else {
      setOptions({ ...options(), dateRangeYearEnd: 0 });
    }
  }

  function updateDateStart(yearStr: string) {
    let year = parseInt(yearStr.replace(/[^0-9]/g, ""));
    year = clamp(year, 0, 99999);
    year = clamp(year, 0, options().dateRangeYearEnd);
    if (year && !isNaN(year)) {
      setOptions({ ...options(), dateRangeYearStart: year });
    } else {
      setOptions({ ...options(), dateRangeYearStart: 0 });
    }
  }

  return (
    <div>
      <h1>Options</h1>
      <div class="links">
        <A href="/">Practice</A>
      </div>
      <div id="options-page">
        <div>
          Blind Time:
          <input
            type="range"
            min={-0.25}
            max={10}
            step={0.25}
            value={options().blindTime}
            onInput={(e) => {
              setOptions({ ...options(), blindTime: Number(e.target.value) });
            }}
          />{" "}
          ({options().blindTime.toFixed(2)}s)
        </div>
        <div>
          Text To Speech:{" "}
          <button
            class={"text-option" + (options().textToSpeech ? " selected" : "")}
            onClick={() => setOptions({ ...options(), textToSpeech: true })}
          >
            Enabled
          </button>
          <button
            class={"text-option" + (!options().textToSpeech ? " selected" : "")}
            onClick={() => setOptions({ ...options(), textToSpeech: false })}
          >
            Disabled
          </button>
        </div>
        <div>
          Input Mode:{" "}
          {Array.from({ length: 3 }, (_, i) => {
            return (
              <>
                <button
                  class={
                    "text-option" +
                    (options().inputMode === i ? " selected" : "")
                  }
                  onClick={() => setOptions({ ...options(), inputMode: i })}
                >
                  {InputMode[i]}
                </button>{" "}
              </>
            );
          })}
        </div>
        <div>
          Date Display Mode:{" "}
          {Array.from({ length: 4 }, (_, i) => {
            return (
              <>
                <button
                  class={
                    "text-option" +
                    (options().dateDisplayMode === i ? " selected" : "")
                  }
                  onClick={() =>
                    setOptions({ ...options(), dateDisplayMode: i })
                  }
                >
                  {DateDisplayMode[i]}
                </button>{" "}
              </>
            );
          })}
        </div>
        <div>
          Date Display Separator:{" "}
          <button
            class={
              "text-option" + (options().dateDisplaySlashes ? " selected" : "")
            }
            onClick={() =>
              setOptions({ ...options(), dateDisplaySlashes: true })
            }
          >
            /
          </button>
          <button
            class={
              "text-option" + (!options().dateDisplaySlashes ? " selected" : "")
            }
            onClick={() =>
              setOptions({ ...options(), dateDisplaySlashes: false })
            }
          >
            -
          </button>
        </div>
        <div>
          Date Range:
          <input
            inputmode="numeric"
            pattern="[0-9]*"
            value={options().dateRangeYearStart}
            onInput={(ev) => {
              updateDateStart(ev.target.value);
            }}
          />
          <input
            inputmode="numeric"
            pattern="[0-9]*"
            value={options().dateRangeYearEnd}
            onInput={(ev) => {
              updateDateEnd(ev.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default OptionsPage;
