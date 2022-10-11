const express = require("express");
const multiplicadorRouter = require("./routes/multiplicadorRoutes");
const app = express();

//middlewares
app.use(express.json());
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

//routes
app.use("/api/multiplicacion/", multiplicadorRouter);

module.exports = app;
