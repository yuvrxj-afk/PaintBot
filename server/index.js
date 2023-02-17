const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hey");
});

const startServer = async () => {
  app.listen(5000, () =>
    console.log("Server has been Started on port http://localhost:5000")
  );
};

startServer();