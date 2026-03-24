# 📝 Web-Based To-Do List Service

## 📌 Project Overview

This project aims to develop a web-based To-Do List application that supports account logins. Users can manage their daily tasks efficiently while optionally maintaining a personal profile.

The system is designed with a structured separation of concerns:

* Frontend for user interface
* Backend for logic and API handling
* Database for persistent storage

---

## 🎯 Objectives

* Create an intuitive and responsive user interface
* Enable task management (add, delete, update tasks)
* Support guest users without account creation
* Provide account-based functionality with user profiles
* Store and retrieve data securely from a server-side database

---

## ⚙️ Features

### 👤 Guest Mode

* No login required
* Tasks stored temporarily (browser storage)
* Quick access for short-term usage

### 🔐 Account Mode

* User registration and login
* Profile details:
  * Name
  * Other information
* Persistent task storage in database

### 📋 To-Do Management

* Add tasks
* Delete tasks
* Mark tasks as completed
* View all tasks

---

## 🏗️ System Architecture

```
Frontend (HTML, CSS)
        ↓
JavaScript (Fetch API)
        ↓
Backend (Node.js / Express)
        ↓
Database (MySQL / MariaDB)
```

---

## 🗂️ Project Structure

```
/frontend
    ├── index.html
    ├── styles.css
    ├── script.js

/backend
    ├── server.js
    ├── routes/
    ├── controllers/

/database
    ├── schema.sql
```

---

1. FRONTEND by AAKASH PATEL (on frontend branch)
   html
   css styling
   > login / sign up page<br>
   > home page (default guest user)<br>

2. LOGIC by PRABIR SOREN (on logic branch)
   Javascript
   fetch API calls
   > make the website interactive<br>
   > connects frontend to server<br>
   > handles guest mode (offline / local storage for guest mode)<br>

3. BACKEND by #? (on backend branch)
   Node.js / Express recommended
   API
   > create simple server<br>

4. DATABASE by RAHUL MARAVI (on database branch)
   mysql / mariadb recommended
   > create user table<br>
   > database table<br>
   > create query<br>

---

## 🔌 API Endpoints (yet unplanned though)

* `POST /signup` → Register user
* `POST /login` → Authenticate user
* `GET /todos` → Fetch tasks
* `POST /todos` → Add task
* `DELETE /