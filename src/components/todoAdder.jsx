import { useState } from "react";

export default function TodoAdder({ handleAddTODO }) {
  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  return (
    <form>
      <div className="my-5">
        <label className="block mb-2 text-m font-medium text-white max-w-20 text-bold">
          TODO
        </label>
        <input
          type="text"
          id="first_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Finish tonights report"
          required
          value={nameField}
          onChange={(e) => setNameField(e.target.value)}
        />
      </div>
      <div className="my-5">
        <label className="block mb-2 text-m font-medium text-white max-w-20 ">
          {" "}
          Description
        </label>
        <textarea
          value={descriptionField}
          onChange={(e) => setDescriptionField(e.target.value)}
          placeholder="Do reasearch..."
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          value="Enter"
          onClick={() => handleAddTODO(nameField, descriptionField)}
        >
          Enter
        </button>
      </div>
    </form>
  );
}
