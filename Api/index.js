const express = require("express");
const app = express();
const cors = require("express-cors");
require("dotenv").config();

app.use(cors);

const connectDB = require("./src/config/mongodb");
const strRouter = require("./src/router/strRouter");

app.use(express.json());
app.use(express.static(__dirname + "/build"));

const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "health check ok! server is running.",
  });
});

app.use("/api/v1/str", strRouter);

connectDB()
  .then(() => {
    console.log(`Successfully connected to MONGODB`);
    app.listen(PORT, () => {
      console.log(`Server is running on the http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    console.log(`DB connection error:`, error);
  });
