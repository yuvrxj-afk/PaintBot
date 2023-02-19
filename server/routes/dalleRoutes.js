import { Configuration, OpenAIApi } from "openai";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/api").get((req, res) => {
  res.send("E!");
});

export default router;