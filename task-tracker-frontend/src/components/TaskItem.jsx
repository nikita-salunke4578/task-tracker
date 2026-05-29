export default function TaskItem({ task, onUpdate, onDelete, onViewDetails }) {
  const statusClass = (task.status || '').toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`task-item task-card ${statusClass}`}>
      <div className="task-left">
        <h3 className="clickable" onClick={() => onViewDetails && onViewDetails(task)}>{task.title}</h3>
        {task.description && <p className="desc">{task.description}</p>}
        <div className="meta">
          <span className={`status-badge ${statusClass}`}>{task.status}</span>
        </div>
      </div>

      <div className="task-right">
        <div className="task-actions">
          {task.status !== 'DONE' && (
            <button
              className="btn-progress"
              onClick={() => onUpdate(task.id, { status: 'IN PROGRESS' })}
              title="Mark as In Progress"
            >
              ▶
            </button>
          )}
          {task.status !== 'DONE' && (
            <button
              className="btn-done"
              onClick={() => onUpdate(task.id, { status: 'DONE' })}
              title="Mark as Done"
            >
              ✓
            </button>
          )}
          <button
            className="btn-delete"
            onClick={() => onDelete(task.id)}
            title="Delete Task"
          >
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}
