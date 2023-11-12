import "./ToggleSwitch.css";

function ToggleSwitch({ isSwitchToggled, setIsSwitchToggled }) {
  const handleChange = (e) => {
    setIsSwitchToggled(e.target.checked);
  };

  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        checked={isSwitchToggled}
        onChange={handleChange}
      ></input>
      <span className="switch__slider"></span>
    </label>
  );
}

export default ToggleSwitch;
