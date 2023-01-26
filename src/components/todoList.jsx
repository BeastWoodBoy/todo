import TodoElement from "./todoElement";

function TodoList({ listItems }) {
  return (
    <div className="grid grid-rows-3 gap-5">
      {listItems.map((item) => (
        <div className="bg-slate-200">
          <TodoElement
            checkedState={item.checkedState}
            name={item.name}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}
export default TodoList;
