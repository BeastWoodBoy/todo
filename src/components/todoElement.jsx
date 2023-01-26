import { useState } from "react";

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
    <div className="grid grid-cols-3">
      <input
        className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        type="checkbox"
        onChange={handleChecked}
        checked={checked}
      />
      <h3 style={{ textDecoration: strike() }}>{name}</h3>
      <p style={{ textDecoration: strike() }}>{description}</p>
    </div>
  );
}
