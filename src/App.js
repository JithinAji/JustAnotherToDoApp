import "./App.css";
import { useState } from "react";
import ToDo from "./components/ToDo";
import AddToDo from "./components/AddToDo";
import ImportExport from "./components/ImportExport";

function App() {
  const [toDos, setToDos] = useState({});

  const handleExport = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    const yyyy = today.getFullYear();

    const fileName = `jithinToDosApp_${dd}-${mm}-${yyyy}.json`;
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(toDos));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", fileName);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        setToDos(imported); // assuming imported is the correct object structure
      } catch (err) {
        alert("Invalid file");
      }
    };
    fileReader.readAsText(event.target.files[0]);
  };

  const addToDo = (content) => {
    const newToDo = {
      content: content,
      isDone: false,
    };
    setToDos((prevToDos) => ({
      ...prevToDos,
      [Date.now()]: newToDo,
    }));
  };

  const markAsDone = (id) => {
    setToDos((prevToDos) => ({
      ...prevToDos,
      [id]: {
        ...prevToDos[id],
        isDone: !prevToDos[id].isDone, // Toggle the isDone state
      },
    }));
  };

  return (
    <div>
      <h1>Just Another ToDo app</h1>
      <AddToDo onAdd={addToDo} />
      {toDos &&
        Object.entries(toDos).map(([id, todo]) => (
          <ToDo
            key={id}
            id={id}
            content={todo.content}
            isDone={todo.isDone}
            markAsDone={markAsDone}
          />
        ))}
      <ImportExport handleImport={handleImport} handleExport={handleExport} />
    </div>
  );
}

export default App;
