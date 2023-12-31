import { A } from "@solidjs/router";
import { InputMode, Options } from "./models";
import { createEffect, createSignal } from "solid-js";
import { getStoredOptions } from "./utils";

function OptionsPage() {
  const [options, setOptions] = createSignal<Options>(getStoredOptions());

  createEffect(() => {
    localStorage.setItem("options", JSON.stringify(options()));
  }, [options]);

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
            min={0}
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
          Input Mode:{" "}
          <span
            class={
              "text-option" +
              (options().inputMode === InputMode.TextInput ? " active" : "")
            }
            onClick={() =>
              setOptions({ ...options(), inputMode: InputMode.TextInput })
            }
          >
            {InputMode[InputMode.TextInput]}
          </span>
          {" | "}
          <span
            class={
              "text-option" +
              (options().inputMode === InputMode.ButtonInput ? " active" : "")
            }
            onClick={() =>
              setOptions({ ...options(), inputMode: InputMode.ButtonInput })
            }
          >
            {InputMode[InputMode.ButtonInput]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OptionsPage;
