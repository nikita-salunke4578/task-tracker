# 🚀 Task Tracker

A full-stack Task Tracker application that allows users to create, update, delete, search, and filter tasks. The project is built using **React + Vite** for the frontend and **Spring Boot + PostgreSQL** for the backend.

## 🌐 Live Demo

### Frontend

https://task-tracker-kemr-mv5qkyghm-nikitasalunke960-4848s-projects.vercel.app/

### Backend API

https://task-tracker-5grr.onrender.com/api/tasks/getTasks

---

# 📌 Features

* ✅ Create new tasks
* ✅ Update existing tasks
* ✅ Delete tasks
* ✅ Search tasks by title
* ✅ Filter tasks by status
* ✅ REST API integration
* ✅ PostgreSQL database storage
* ✅ Responsive UI
* ✅ Full-stack deployment

---

# 🛠️ Tech Stack

## Frontend

* React
* Vite
* JavaScript
* CSS

## Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* PostgreSQL

## Database

* PostgreSQL (Aiven Cloud)

## Deployment

* Frontend: Vercel
* Backend: Render

---

# 🏗️ Project Architecture

```text
React (Vercel)
      │
      ▼
Spring Boot REST API (Render)
      │
      ▼
PostgreSQL Database (Aiven)
```

---

# 📂 Project Structure

```text
task-tracker
│
├── task-tracker-frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── task-tracker-backend
    ├── src
    ├── pom.xml
    ├── Dockerfile
    └── application.properties
```

---

# ⚙️ Backend Setup

## Clone Repository

```bash
git clone https://github.com/nikita-salunke4578/task-tracker.git
cd task-tracker
```

## Navigate to Backend

```bash
cd task-tracker-backend
```

## Configure Database

Create PostgreSQL database and update:

```properties
spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

Or use environment variables:

```properties
spring.datasource.url=${spring.datasource.url}
spring.datasource.username=${spring.datasource.username}
spring.datasource.password=${spring.datasource.password}
```

## Run Application

```bash
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

# 🎨 Frontend Setup

## Navigate to Frontend

```bash
cd task-tracker-frontend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variable

Create `.env` file:

```env
VITE_API_BASE=http://localhost:8080/api/tasks
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🌍 Environment Variables

## Frontend (.env)

```env
VITE_API_BASE=http://localhost:8080/api/tasks
```

## Production (Vercel)

```env
VITE_API_BASE=https://task-tracker-5grr.onrender.com/api/tasks
```

---

# 📡 API Endpoints

## Get All Tasks

```http
GET /api/tasks/getTasks
```

## Create Task

```http
POST /api/tasks
```

Request Body:

```json
{
  "title": "Learn Spring Boot",
  "description": "Practice REST APIs",
  "status": "PENDING"
}
```

## Update Task

```http
PUT /api/tasks/{id}
```

## Delete Task

```http
DELETE /api/tasks/{id}
```

## Search By Status

```http
GET /api/tasks/status?status=COMPLETED
```

## Search By Title

```http
GET /api/tasks/search?keyword=spring
```

---

# 🐳 Docker Support

Build Docker Image:

```bash
docker build -t task-tracker .
```

Run Container:

```bash
docker run -p 8080:8080 task-tracker
```

---

# 🚀 Deployment

## Backend (Render)

Build Command:

```bash
mvn clean package
```

Start Command:

```bash
java -jar target/*.jar
```

## Frontend (Vercel)

Build Command:

```bash
npm run build
```

Output Directory:

```text
dist
```

---

# 🔮 Future Improvements

* Task Categories
* Due Dates
* Dark/Light Theme Toggle
* Pagination
* Task Priority Levels
* User Dashboard
* Notifications

