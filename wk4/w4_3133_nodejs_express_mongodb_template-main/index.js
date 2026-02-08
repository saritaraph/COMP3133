const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');
const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
const DB_NAME = "db_comp3133_employee"
const DB_USER_NAME = 'sarayohannes94_db_user'
const DB_PASSWORD = 'SUKvsGpXoMlzrGNU'
const CLUSTER_ID = 'ycclgwi'
const HOST = "comp3123.ycclgwi.mongodb.net";
const DB_CONNECTION =`mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=comp3123`;

async function connectToMongoDB(connectionString = DB_CONNECTION) {
  await mongoose.connect(connectionString);
}

app.use(employeeRouter);

app.listen(SERVER_PORT, () => { 
  console.log('Server is running...') 
  try {
    connectToMongoDB(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});