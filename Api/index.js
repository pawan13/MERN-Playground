const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./src/config/mongodb");
const strRouter = require("./src/router/strRouter");

app.use(express.json());

const PORT = 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "health check ok!",
  });
});

app.use("/api/v1/str", strRouter);

connectDB()
  .then(() => {
    console.log(`Successfully connected to DB`);
    app.listen(PORT, () => {
      console.log(`Server is running on the http://localhost:${PORT}/health`);
    });
  })
  .catch((error) => {
    console.log(`DB connection error:`, error);
  });
