const express = require("express");
const ambassadorRouter = express.Router();

const { ctrlWrapper, upload } = require("../../middlewares");
const {
  sendAmbassadorData,
} = require("../../controllers/ambassadors/sendAmbassadorData");

// send ambassador data
ambassadorRouter.post(
  "/ambassador/send-data",
  upload.array("files"),
  ctrlWrapper(sendAmbassadorData)
);

module.exports = ambassadorRouter;
