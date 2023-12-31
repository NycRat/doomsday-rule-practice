import { Weekday } from "./models";

function InputButton(props: { day: Weekday; onClick: () => void }) {
  return (
    <span onClick={props.onClick}>
      ({props.day})
      <br />
      {Weekday[props.day]}
    </span>
  );
}

export default InputButton;
