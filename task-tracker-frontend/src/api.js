const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3030/api/tasks';

async function request(path = '', options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API error ${res.status}: ${text}`);
  }

  if (res.status === 204) return null;
  return res.json();
}


export function getTasks() {
  return request('/getTasks');
}

export function createTask(task) {
  return request('',{ method: 'POST', body: JSON.stringify(task) });
}

export function updateTask(id, task) {
  return request(`/${id}`, { method: 'PUT', body: JSON.stringify(task) });
}

export function deleteTask(id) {
  return request(`/${id}`, { method: 'DELETE' });
}

export function searchByStatus(status) {
  return request(`/status?status=${encodeURIComponent(status)}`);
}

export function searchByTitle(Keyword) {
  return request(`/search?keyword=${encodeURIComponent(Keyword)}`);
}