import { Configuration, OpenAIApi } from "openai";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("PaintBot HERE!");
});

export default router;