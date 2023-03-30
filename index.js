const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.js");
const userRoute = require("./routes/user.js");
const loginTimesRoute = require("./routes/loginTimes.js");
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Success connect"))
  .catch(() => console.log("Fail connect"))
;
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/login-times", loginTimesRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
