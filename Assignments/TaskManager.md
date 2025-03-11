### **Case Study: Personal Task Manager API (Express, MongoDB, and tsyringe)**  

#### **Background**  
A simple to-do list is not always enough. People need a **Personal Task Manager** that helps them organize tasks with **categories, due dates, and completion status**.  

Your task is to develop a **RESTful API** that allows users to **add, update, delete, and retrieve tasks**. Tasks should have a **title, description, category, due date, and status (pending/completed)**.  

This case study is designed to be completed in **2 hours**, providing a slightly complex yet beginner-friendly experience.  

---

### **Objective**  
Build a **RESTful API** for managing tasks using **Express.js**, **MongoDB (with Mongoose)**, and **tsyringe for dependency injection**.  

---

### **Key Features**  

1. **Task Management (CRUD Operations)**  
   - Users can create a task with:  
     - `title` (required)  
     - `description` (optional)  
     - `category` (Work, Personal, Shopping, etc.)  
     - `dueDate` (optional)  
     - `status` (pending/completed)  
   - Users can **update a task** (title, description, category, due date, status).  
   - Users can **delete a task** when completed.  

2. **Retrieve Tasks**  
   - Users can get **all tasks**.  
   - Users can get **tasks filtered by status (pending/completed)**.  
   - Users can get **tasks sorted by due date**.  

3. **Category-Based Task Management**  
   - Users can **filter tasks** by category (e.g., Work, Personal).  
   - Users can get a **count of tasks per category**.  

---

### **Technical Requirements**  

- **Framework**: Express.js  
- **Database**: MongoDB (Mongoose ODM)  
- **Dependency Injection**: Use **tsyringe**  
- **Routing**: Separate routes for each API operation  

---

### **Suggested Folder Structure**  

```
task-manager-api/
│── src/
│   ├── controllers/    # API Controllers
│   ├── models/         # Mongoose Models
│   ├── services/       # Business Logic Services
│   ├── repositories/   # Database Interaction Layer
│   ├── routes/         # Express Routes
│   ├── di-container.ts # tsyringe Dependency Injection Configuration
│   ├── app.ts          # Express App Initialization
│   ├── server.ts       # Server Setup
│── package.json        # Dependencies
│── .env                # Environment Variables
```

---

### **Sample API Endpoints**  

#### **Task Management**  
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| POST   | `/api/tasks`     | Create a new task |
| GET    | `/api/tasks`     | Retrieve all tasks |
| GET    | `/api/tasks/:id` | Retrieve a specific task |
| PUT    | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

#### **Task Filtering & Sorting**  
| Method | Endpoint                     | Description |
|--------|-----------------------------|-------------|
| GET    | `/api/tasks?status=pending`  | Get all pending tasks |
| GET    | `/api/tasks?status=completed`| Get all completed tasks |
| GET    | `/api/tasks?category=Work`   | Get tasks by category |
| GET    | `/api/tasks/duedate?sorted=asc`  | Get tasks sorted by due date |

#### **Task Analytics**  
| Method | Endpoint                    | Description |
|--------|-----------------------------|-------------|
| GET    | `/api/tasks/count/category` | Get task count per category |

---
