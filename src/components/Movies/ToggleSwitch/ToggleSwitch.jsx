import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <label className="switch">
      <input className="switch__checkbox" type="checkbox"></input>
      <span className="switch__slider"></span>
    </label>
  );
}

export default ToggleSwitch;
