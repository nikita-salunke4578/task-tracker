package com.tasktracker.controller;

import com.tasktracker.entity.Task;
import com.tasktracker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = {"http://localhost:5173","*"})
public class TaskController {

    @Autowired
    private TaskService taskService;


    @GetMapping("/getTasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }


    @PostMapping
    public ResponseEntity<Task> create(@RequestBody Task task) {
        Task created = taskService.createTask(task);
        URI location = URI.create("/api/tasks/" + created.getId());
        return ResponseEntity.created(location).body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Task> update(@PathVariable Long id, @RequestBody Task updated) {
        try {
            Task t = taskService.updateTask(id, updated);
            return ResponseEntity.ok(t);
        } catch (IllegalArgumentException e) {
            String msg = e.getMessage() == null ? "" : e.getMessage().toLowerCase();
            if (msg.contains("not found")) return ResponseEntity.notFound().build();
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        try {
            taskService.deleteTask(id);
            return ResponseEntity.noContent().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/status")
    public List<Task> searchByStatus(
            @RequestParam String status) {

        return taskService.getTasksByStatus(status);
    }

    @GetMapping("/search")
    public List<Task> searchByTitle(@RequestParam String keyword)  {
        return taskService.getTasksByTitle(keyword);
    }
}
    