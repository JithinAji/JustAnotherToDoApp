import { useState } from "react";
import "./ToDo.css";

function ToDo({ content, isDone, id, markAsDone }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableContent, setEditableContent] = useState(content);

  const handleDone = () => {
    markAsDone(id);
  };

  const handleDoubleClick = () => {
    if (!isDone) {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setEditableContent(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // Optional: Trigger a callback to save this change
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      // Optional: Save on Enter
    }
  };

  return (
    <div className="todo">
      {!isDone ? (
        isEditing ? (
          <input
            type="text"
            value={editableContent}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="todo-input"
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{editableContent}</span>
        )
      ) : (
        <span>
          <del>{editableContent}</del>
        </span>
      )}
      <button onClick={handleDone}>{isDone ? "Undo" : "Mark as Done"}</button>
    </div>
  );
}

export default ToDo;
