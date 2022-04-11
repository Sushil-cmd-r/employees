const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const employeeRoutes = require("./routes/employee");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, console.log("listening on port 5000")))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", employeeRoutes);
