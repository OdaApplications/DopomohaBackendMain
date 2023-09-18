const express = require("express");
const testRouter = express.Router();

const { ctrlWrapper, createPdfTest } = require("../../middlewares");

const { testController } = require("../../controllers/testController");

testRouter.get("/get-test", createPdfTest, ctrlWrapper(testController));

module.exports = testRouter;
