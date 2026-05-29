import { useEffect, useState } from 'react';
import './App.css';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import TaskDetails from './components/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('ALL');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);


  async function load() {
    try {
      const data = await getTasks();
      setTasks(data || []);
    } catch (e) {
      setError('Could not load tasks (backend may be unavailable). Using local state.');
      setTasks([]);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleAdd(task) {
    try {
      const created = await createTask(task);
      setTasks((t) => [...t, created]);
    } catch (e) {
      // fallback to local-only
      setTasks((t) => [...t, { ...task, id: Date.now(), _local: true }]);
    }
  }

  async function handleUpdate(id, patch) {
    try {
      const updated = await updateTask(id, patch);
      setTasks((list) => list.map((t) => (t.id === id ? updated : t)));
    } catch (e) {
      setTasks((list) => list.map((t) => (t.id === id ? { ...t, ...patch } : t)));
    }
  }

  async function handleDelete(id) {
    try {
      await deleteTask(id);
      setTasks((list) => list.filter((t) => t.id !== id));
    } catch (e) {
      setTasks((list) => list.filter((t) => t.id !== id));
    }
  }

  const filtered = tasks.filter((t) => {
    if (filter !== 'ALL' && t.status !== filter) return false;
    if (query && !t.title.toLowerCase().includes(query.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="app-root">
      <header>
        <h1>Task Tracker</h1>
      </header>

      {error && <div className="error">{error}</div>}

      <div className="controls">
        <FilterBar value={filter} onChange={setFilter} />
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <main>
        <TaskForm onAdd={handleAdd} />
        <TaskList tasks={filtered} onUpdate={handleUpdate} onDelete={handleDelete} onViewDetails={(t) => setSelected(t)} />
      </main>

      {selected && (
        <TaskDetails task={selected} onClose={() => setSelected(null)} onSave={(id, patch) => handleUpdate(id, patch)} onDelete={(id) => handleDelete(id)} />
      )}
    </div>
  );
}

export default App;