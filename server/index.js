const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./mongodb/connect");

import postRoutes from "./routes/postRoutes";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/api/v1/post", postRoutes);
app.get("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("hey");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, () =>
      console.log("Server has been Started on port http://localhost:5000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
