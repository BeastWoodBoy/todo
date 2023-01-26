import { useState } from "react";
import "../App.css";

export default function TodoElement({ checkedState, name, description }) {
  const [checked, setChecked] = useState(checkedState);
  const handleChecked = () => {
    setChecked(!checked);
  };
  const strike = () => {
    let out = "";
    if (checked) {
      out = "line-through";
    }
    return out;
  };
  return (
    <div className="todoContainer">
      <input type="checkbox" onChange={handleChecked} checked={checked} />
      <h3 style={{ textDecoration: strike() }}>{name}</h3>
      <p style={{ textDecoration: strike() }}>{description}</p>
    </div>
  );
}
