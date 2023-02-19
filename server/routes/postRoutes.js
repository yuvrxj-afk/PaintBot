const express = require("express");
const dotenv = require("dotenv");

import { v2 as cloudinary } from "cloudinary";
import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

export default router;
