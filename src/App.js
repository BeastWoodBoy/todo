import "./App.css";
import TodoList from "./components/todoList";
import React, { useState } from "react";
import TodoAdder from "./components/todoAdder";

function App() {
  const [listItems, setListItems] = useState([
    {
      key: 1,
      checkedState: false,
      name: "Get food",
      description: "watermelon and some pears",
    },
    {
      key: 2,
      checkedState: true,
      name: "Discrete Math",
      description: "Cover Powersets and Unions",
    },
  ]);
  const addTODO = (name, description) => {
    const newElem = { key: 1, checkedState: false, name: "", description: "" };
    if (listItems.length > 0) {
      newElem.key = listItems[listItems.length - 1].key + 1;
      newElem.name = name;
      newElem.description = description;
    }
    const newTODO = listItems;
    newTODO.push(newElem);
    setListItems({ newTODO });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
        <TodoList listItems={listItems} />
        {/* <TodoAdder onAddTODO={addTODO()} /> */}
      </header>
    </div>
  );
}

export default App;
