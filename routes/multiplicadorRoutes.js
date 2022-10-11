const express = require("express");
const multiplicadorController = require("../controllers/multiplicadorController");
const multiplicadorRouter = express.Router();
//routes
multiplicadorRouter.route("/:multiplicador").post(multiplicadorController.multiplicar);

module.exports = multiplicadorRouter;
