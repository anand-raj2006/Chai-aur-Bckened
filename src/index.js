import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: "../.env",
});

import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});