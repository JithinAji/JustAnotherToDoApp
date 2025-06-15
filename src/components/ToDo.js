import "./ToDo.css";

function ToDo({ content, isDone, id, markAsDone }) {
  const handleDone = () => {
    markAsDone(id);
  };

  return (
    <div className="todo">
      {!isDone ? (
        <span>{content}</span>
      ) : (
        <span>
          <del>{content}</del>
        </span>
      )}
      <button isDone={isDone} onClick={handleDone}>
        {isDone ? "Undo" : "Mark as Done"}
      </button>
    </div>
  );
}

export default ToDo;
