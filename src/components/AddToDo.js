import "./AddToDo.css";
import { useState } from "react";

function AddToDo({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const sentToDo = () => {
    // Logic to add a new todo item
    console.log("New todo item added");
    onAdd(inputValue); // Call the onAdd function passed from the parent component
    setInputValue(""); // Clear the input field after adding
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sentToDo();
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={sentToDo}>Add</button>
    </div>
  );
}

export default AddToDo;
