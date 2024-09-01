
<h1>Project Name: Zimyo Assignment</h1> <br> <hr>
<h2>Project Overview</h2><br>
This project is a simple portal that allows users to add, edit, and delete products. It is built using the MERN stack (MySQL, Express, React, and Node.js) as per the assignment requirements. The backend is powered by Node.js and Express, while the frontend is developed using React.
<br> <hr>
<h2>Prerequisites</h2> <br>
Before you begin, ensure you have the following installed on your local machine:
<br> <hr>
Node.js: This project requires Node.js. You can download and install it from here. <br>
<h3>1. Clone the Repository </h3> <br>
git clone https://github.com/faiz-gif/zimyo-assignment.git <br>
cd zimyo-assignment<br>
<h3>2. Install Dependencies</h3><br>
Navigate to both the backend and frontend directories and run npm install to install the required dependencies.<br>

For Backend:<br>
cd backend<br>
npm install<br>
For Frontend:<br>
cd frontend<br>
npm install<br>
<h3>3. Create Environment Files</h3>h3> <br>
You will need to create environment files for both the backend and frontend to configure your local environment. <br>

Backend (backend/.env) <br>
Create a .env file in the backend directory and add the following configuration: <br>

DB_HOST= <br>
DB_USER=<br>
DB_PASSWORD= <br>
DB_NAME=<br>
API_KEY=<br>
PORT=<br>


Frontend (frontend/.env)<br>
Create a .env file in the frontend directory and add the following configuration:<br>

REACT_APP_API_URL=<br>
REACT_APP_API_KEY=<br>

<h3>4. Running the Project</h3> <br>
Start the Backend Server<br>
cd backend<br>
node server.js<br>
This will start the backend server on http://localhost:5000.<br>

Start the Frontend Development Server<br>
cd frontend<br>
npm start<br>
This will start the frontend development server on http://localhost:3000.<br>

<h3>5. Accessing the Application</h3> <br>
Once both servers are running, you can access the application in your browser by navigating to http://localhost:3000.<br>
<hr>
<h2>Project Structure</h2> <br> <hr>
Backend: Contains the API built with Express and MySQL for data management.<br>
Frontend: Contains the React application for interacting with the backend.<br>
Features<br>
Add Products: Allows you to add new products to the inventory.<br>
Edit Products: Modify existing product details.<br>
Delete Products: Remove products from the inventory.<br>
View Products: Display a list of all products with their details.<br>

