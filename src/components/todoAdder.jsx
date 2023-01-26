import { useState, Component } from "react";

export default function TodoAdder() {
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  return (
    <div>
      <input
        type="text"
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
        placeholder="Name"
      />{" "}
      <textarea
        value={descriptionField}
        onChange={(e) => setDescriptionField(e.target.value)}
        placeholder="Description"
      />
      <input
        type="button"
        value="Enter"
        // onClick={onAddTODO(nameField, descriptionField)}
      />
    </div>
  );
}
