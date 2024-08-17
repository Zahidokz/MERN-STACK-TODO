const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const dataOfRoutes = require("./routes/usersRoutes");
const app = express();

const corsOption = {
  origin:process.env.FRONTEND_URL,
  methods:"GET, POST , PUT, PATCH , DELETE, HEAD",
  credentials: true
}
app.use(cors(corsOption));
app.use(express.json());
app.use("/users", dataOfRoutes);
mongoose
  .connect(process.env.DB_CONNECT_URI)
  .then(() => console.log("Successfully connected to DB"))
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT || 7000, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`connected with PORT no: ${process.env.PORT}`);
  }
});
