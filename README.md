# Backend - Todo App

The API is an application to manage tasks. It is built with Node.js, Express, and PostgreSQL..

## Prerequisites

`
Node.js v14 or higher
PostgreSQL installed and running locally.`

## Installation

```
### 1. Clone repository

`
git clone
https://github.com/GeraZorzoni/React-To-do-List-Backend.git`

### 2. Install the dependencies:

`npm install`

### 3. Create a .env file at the project root with the following configuration

`File .env`

DB_USER=postgres
DB_HOST=localhost
DB_NAME=postgres
DB_PASSWORD=your_password
DB_PORT=5432
PORT=3001

### 4. db config

PostgreSQL installed and running locally.

`script SQL config/db`

### 5. Start the server:

`npm run dev`

### 6. Api

`The API will be running at http://localhost:3001.`

Endpoints:
GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update a new task.
DELETE /api/tasks/:id: Delete a task.



```
