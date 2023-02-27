require("dotenv").config();

const express = require("express");
const cors = require("cors");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// port
const PORT = process.env.PORT || 5000;

// listening for requests
app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});
