import "./ToggleSwitch.css";

function ToggleSwitch({ isCheck, handleCheckboxChange }) {
  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        checked={isCheck}
        onChange={handleCheckboxChange}
      ></input>
      <span className="switch__slider"></span>
    </label>
  );
}

export default ToggleSwitch;
