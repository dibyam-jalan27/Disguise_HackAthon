const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleware = require('./middleware/error');

//CORS
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Import all routes
const userRoutes = require("./routes/userRoutes");
const cityRoutes = require("./routes/cityRoutes");

app.use("/api/v1",userRoutes);
app.use("/api/v1",cityRoutes);


// Import error middleware
app.use(errorMiddleware);

module.exports = app;