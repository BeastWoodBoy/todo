// import "./App.css";
import TodoList from "./components/todoList";
import React, { useState } from "react";
import TodoAdder from "./components/todoAdder";
import "./index.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const addTODO = (name, description) => {
    console.log(
      `addTODO envolked with name: ${name} and description: ${description}`
    );
    const newElem = {
      key: 1,
      checkedState: false,
      name: name,
      description: description,
    };
    if (listItems.length >= 0 && name && description) {
      if (listItems.length === 0) {
        newElem.key = 1;
      } else {
        newElem.key = listItems[listItems.length - 1].key + 1;
      }
      newElem.checkedState = false;
      newElem.name = name;
      newElem.description = description;
      const newTODO = [...listItems];
      newTODO.push(newElem);
      setListItems(newTODO);
    }
  };
  return (
    <div className=" mx-40 grid grid-rows-3 gap-4">
      <div className="flex justify-center max-h-full">
        <h1 className="font-mono text-4xl my-20 font-bold">TODO LIST</h1>
      </div>
      <div className="border-5 border-sky-400 grid-cols-3">
        <TodoList listItems={listItems} />
      </div>
      <TodoAdder handleAddTODO={addTODO} />
    </div>
  );
}

export default App;
