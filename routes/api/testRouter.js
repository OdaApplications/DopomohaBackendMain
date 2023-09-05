const express = require("express");
const testRouter = express.Router();

const { ctrlWrapper } = require("../../middlewares");

const { testController } = require("../../controllers/testController");

testRouter.get("/get-test", ctrlWrapper(testController));

module.exports = testRouter;
