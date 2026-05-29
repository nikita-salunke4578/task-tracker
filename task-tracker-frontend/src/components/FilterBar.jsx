export default function FilterBar({ value, onChange }) {
  return (
    <div className="filter-bar">
      <label>
        Filter:
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="ALL">All</option>
          <option value="TO DO">To Do</option>
          <option value="IN PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>
      </label>
    </div>
  );
}
