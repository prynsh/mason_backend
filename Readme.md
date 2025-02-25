# Notes App Backend

This repository contains the backend code for a simple note-taking application.  It provides the API endpoints for user authentication, note management, and search functionality.

## Features

*   User authentication (signup/signin)
*   Note creation, retrieval, updating, and deletion
*   Note search by title or tag

## Technologies Used

*   Express.js
*   Node.js
*   MongoDB

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/prynsh/mason_backend.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd mason_backend
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Create an environment file:**

    Create a `.env` file in the root directory of the project.

5.  **Add environment variables:**

    Add the following lines to your `.env` file, replacing the placeholders with your actual values:

    ```
    DATABASE_URL=mongodb://your_mongodb_connection_string
    JWT_SECRET=your_secret_jwt_key
    PORT=8080 || 3001
    ```
    * **`DATABASE_URL`**:  This is the connection string for your MongoDB database.  Make sure MongoDB is running and you have a database set up. Replace `your_mongodb_connection_string` with the actual connection string.
    * **`JWT_SECRET`**: This is a secret key used for JSON Web Token (JWT) generation and verification.  Choose a strong, random string.  This is crucial for security.
    * **`PORT`**: The port on which the server will run.
## Running the Application

1.  **Start the development server:**

    ```bash
    npm run dev
    ```


## API Endpoints

[Provide a list of API endpoints with their methods (GET, POST, PUT, DELETE), routes, and descriptions.  For example:]

*   `POST /auth/signup`:  Registers a new user.
*   `POST /auth/signin`:  Logs in an existing user.
*   `GET /notes/bulk`: Retrieves all notes for the authenticated user.
*   `POST /notes/create`: Creates a new note.
*   `PUT /notes/:id`: Updates a specific note.
*   `DELETE /notes/:id`: Deletes a specific note.
*   `GET /notes/:id`: Searches notes by title or tag.

[Include details about request bodies (e.g., JSON structure) and response formats (e.g., JSON structure, status codes) for each endpoint.]
