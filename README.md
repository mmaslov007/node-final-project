# To-Do List Application

## Overview
This is a responsive and modern **To-Do List Application** built with **Node.js**, **Express**, **EJS**, and **MariaDB**. The app provides a user-friendly interface for managing tasks, including features to add, view, complete, and delete tasks. Tasks can include both a title and a detailed description for clarity.

---

## Features

### Core Features
- **Add Tasks**: Users can add tasks with a title and description.
- **View Details**: Each task has a "View Details" page that shows its title, description, and completion status.
- **Mark as Complete**: Tasks can be marked as complete with a single click.
- **Delete Tasks**: Tasks can be removed from the list.
- **Responsive Design**: The app is optimized for both desktop and mobile devices with a sleek dark mode.

### Database
Powered by **MariaDB**, the `tasks` table includes:
- `id`: Unique identifier for each task.
- `title`: Short title for the task.
- `description`: Detailed explanation of the task.
- `completed`: Boolean status indicating whether the task is complete.
