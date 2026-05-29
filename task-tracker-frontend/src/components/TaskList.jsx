import TaskItem from './TaskItem';

export default function TaskList({ tasks, onUpdate, onDelete, onViewDetails }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks yet.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id ?? t._localId ?? t.title} task={t} onUpdate={onUpdate} onDelete={onDelete} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
}
