import { useState } from 'react';

export default function TaskDetails({ task, onClose, onSave, onDelete }) {
  const [title, setTitle] = useState(task?.title ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [status, setStatus] = useState(task?.status ?? 'TO DO');

  if (!task) return null;

  function save() {
    onSave(task.id, { title, description, status });
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <header>
          <h2>Task Details</h2>
        </header>

        <div className="modal-body">
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="TO DO">To Do</option>
            <option value="IN PROGRESS">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>

        <div className="modal-actions">
          <button onClick={save}>Save</button>
          <button onClick={onClose}>Close</button>
          <button className="danger" onClick={() => { onDelete(task.id); onClose(); }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
