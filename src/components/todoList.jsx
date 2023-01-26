import TodoElement from "./todoElement";

function TodoList({ listItems }) {
  return (
    <div>
      {listItems.map((item) => (
        <TodoElement
          checkedState={item.checkedState}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default TodoList;
