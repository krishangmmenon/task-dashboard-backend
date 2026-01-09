# Task Dashboard – Backend

Backend service for a full-stack task dashboard application.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

## Features

- User authentication (JWT-based)
- Protected routes
- User profile fetch & update
- Task CRUD operations
- Search & filter support
- Centralized error handling

## Project Structure

src/

- controllers/
- routes/
- models/
- middleware/
- utils/
- config/

## Running Locally

1. Install dependencies
   npm install
2. Create .env file
   MONGO_URI=...
   JWT_SECRET=...
3. Start server
   npm run dev

## Scalability Notes

- Stateless JWT authentication
- Clear separation of concerns
- API-first design for frontend/backend independence

## Related Repository

Frontend: https://github.com/krishangmmenon/task-dashboard-frontend
