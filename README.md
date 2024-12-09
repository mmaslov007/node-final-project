# To-Do List Application

## Overview
This is a responsive and modern **To-Do List Application** built with **Node.js**, **Express**, **EJS**, and **MariaDB**. The app provides a user-friendly interface for managing tasks, including features to add, view, complete, and delete tasks. Tasks can include both a title and a detailed description for clarity.

## Features

### Core Features
- **Add Tasks**: Users can add tasks with a title and description.
- **View Details**: Each task has a "View Details" page that shows its title, description, and completion status.
- **Mark as Complete**: Tasks can be marked as complete with a single click.
- **Delete Tasks**: Tasks can be removed from the list.
- **Responsive Design**: The app is optimized for both desktop and mobile devices with a sleek dark mode.

### Database Setup
To properly utilize this application, paste the following into MySQL Workbench:
```sql
CREATE DATABASE IF NOT EXISTS todolist;
USE todolist;

DROP TABLE tasks;
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE
);

SELECT * FROM tasks;
