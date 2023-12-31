const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");
const app = express();
// const cors = require('cors');

connectDB(
  app.listen(port, () => console.log(`Server started on port ${port}`))
);

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  if ((req.header.origin = "https://lottimartin.com")) {
    res.setHeader("Access-Control-Allow-Origin", "https://lottimartin.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
  } else if ((req.header.origin = "https://gyurkesm.github.io/wedding-app")) {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://gyurkesm.github.io/wedding-app"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
  }
  //res.setHeader("Access-Control-Allow-Origin", "*");
});

// app.use(cors());
app.use(express.json({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/guest", require("./routes/guestRoutes"));

app.use(errorHandler);

app.get("/get-ip", (req, res) => {
  const clientIp =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.send(`Client IP Address: ${clientIp}`);
});
