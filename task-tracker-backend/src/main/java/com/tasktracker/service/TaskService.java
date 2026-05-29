package com.tasktracker.service;

import com.tasktracker.entity.Task;
import com.tasktracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {


    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }


    public Task createTask(Task task) {
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Task title cannot be empty");
        }
        if (task.getStatus() == null) {
            task.setStatus("TO DO");
        }
        return taskRepository.save(task);
    }

    public Task updateTask(Long id, Task updatedTask) {
        Optional<Task> existing = taskRepository.findById(id);
        if (existing.isEmpty()) {
            throw new IllegalArgumentException("Task not found with id: " + id);
        }
        Task task = existing.get();
        if (updatedTask.getTitle() != null && !updatedTask.getTitle().trim().isEmpty()) {
            task.setTitle(updatedTask.getTitle());
        }
        if (updatedTask.getDescription() != null) {
            task.setDescription(updatedTask.getDescription());
        }
        if (updatedTask.getStatus() != null) {
            String status = updatedTask.getStatus();
            if (!isValidStatus(status)) {
                throw new IllegalArgumentException("Invalid status: " + status + ". Must be: TO DO, IN PROGRESS, or DONE");
            }
            task.setStatus(status);
        }
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new IllegalArgumentException("Task not found with id: " + id);
        }
        taskRepository.deleteById(id);
    }

    public List<Task> getTasksByStatus(String status) {
        if (!isValidStatus(status)) {
            throw new IllegalArgumentException("Invalid status: " + status);
        }
        return taskRepository.findByStatus(status);
    }

    public List<Task> getTasksByTitle(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return getAllTasks();
        }
        return taskRepository.findByTitleContainingIgnoreCase(keyword);
    }


    private boolean isValidStatus(String status) {
        return "TO DO".equals(status) || "IN PROGRESS".equals(status) || "DONE".equals(status);
    }

    public static class TaskStatistics {
        public long todo;
        public long inProgress;
        public long done;

        public TaskStatistics(long todo, long inProgress, long done) {
            this.todo = todo;
            this.inProgress = inProgress;
            this.done = done;
        }
    }
}
