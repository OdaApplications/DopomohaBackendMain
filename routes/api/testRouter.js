const express = require("express");
const testRouter = express.Router();

const { ctrlWrapper, createPdf } = require("../../middlewares");

const { testController } = require("../../controllers/testController");

testRouter.get("/get-test", createPdf, ctrlWrapper(testController));

module.exports = testRouter;
