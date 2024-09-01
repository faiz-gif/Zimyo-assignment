
Project Name: Zimyo Assignment
Project Overview
This project is a simple portal that allows users to add, edit, and delete products. It is built using the MERN stack (MySQL, Express, React, and Node.js) as per the assignment requirements. The backend is powered by Node.js and Express, while the frontend is developed using React.

Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js: This project requires Node.js. You can download and install it from here.
1. Clone the Repository
git clone https://github.com/your-repository-url/zimyo-assignment.git
cd zimyo-assignment
2. Install Dependencies
Navigate to both the backend and frontend directories and run npm install to install the required dependencies.

For Backend:
cd backend
npm install
For Frontend:
cd frontend
npm install
3. Create Environment Files
You will need to create environment files for both the backend and frontend to configure your local environment.

Backend (backend/.env)
Create a .env file in the backend directory and add the following configuration:

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
API_KEY=
PORT=


Frontend (frontend/.env)
Create a .env file in the frontend directory and add the following configuration:

REACT_APP_API_URL=
REACT_APP_API_KEY=

4. Running the Project
Start the Backend Server
cd backend
node server.js
This will start the backend server on http://localhost:5000.

Start the Frontend Development Server
cd frontend
npm start
This will start the frontend development server on http://localhost:3000.

5. Accessing the Application
Once both servers are running, you can access the application in your browser by navigating to http://localhost:3000.

Project Structure
Backend: Contains the API built with Express and MySQL for data management.
Frontend: Contains the React application for interacting with the backend.
Features
Add Products: Allows you to add new products to the inventory.
Edit Products: Modify existing product details.
Delete Products: Remove products from the inventory.
View Products: Display a list of all products with their details.
Troubleshooting
Ensure that MySQL is installed and running on your machine.
Check that the environment variables are correctly configured in the .env files.
Ensure that you are running the backend and frontend servers simultaneously.
Conclusion
This project provides a basic implementation of a product management portal. It demonstrates the use of MySQL for database management, Express.js for building a REST API, and React.js for creating a user interface. The project is a good starting point for understanding full-stack web development using the MERN stack.
