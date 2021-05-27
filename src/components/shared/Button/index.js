export default function Button(props) {
  return (
    <button className={props.type} onClick={props.click}>{props.label}</button>
  );
}
