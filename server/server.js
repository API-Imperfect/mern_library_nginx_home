require("dotenv").config();
const express = require("express");

// Initialize the app
const app = express();

// enable our app to parse JSON
app.use(express.json());

// declare our PORT
const PORT = process.env.PORT || 5000;

// Mount/Create Routes
app.get("/test", (req, res) => {
    res.json({
        Hi: "Welcome to the MERN Library API",
    });
});

// Make the server listen on the declared PORT variable
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on  port ${PORT}`
    )
);
