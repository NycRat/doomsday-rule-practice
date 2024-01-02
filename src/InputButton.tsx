function InputButton(props: { text: string; onClick: () => void }) {
  return (
    <span onClick={props.onClick}>
      {/* <br /> */}
      {props.text}
    </span>
  );
}

export default InputButton;
