import "./ImportExport.css";

function ImportExport({ handleImport, handleExport }) {
  return (
    <div className="import-export">
      <button onClick={handleExport}>🧾 Export</button>
      <label className="import-label">
        <span>📂 Import</span>
        <input type="file" accept="application/json" onChange={handleImport} />
      </label>
    </div>
  );
}

export default ImportExport;
