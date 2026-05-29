package com.tasktracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Main entry point for the Task Tracker Spring Boot Application
 * This class starts the Spring Boot server
 */
@SpringBootApplication
public class TaskTrackerApplication {

    public static void main(String[] args) {

        SpringApplication.run(TaskTrackerApplication.class, args);
    }

}

