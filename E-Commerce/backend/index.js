const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./database/database");
const router = require('./routes/index')


const app = express();
app.use(cors);
app.use('/api',router)

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port no ${PORT}`);
  });
});
