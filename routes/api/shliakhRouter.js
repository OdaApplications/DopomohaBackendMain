const express = require("express");
const shliakhRouter = express.Router();

const { ctrlWrapper, sendFiles, upload } = require("../../middlewares");
const { sendShliakhFiles } = require("../../controllers/shliakh");

shliakhRouter.post(
  "/send-shliakh",
  upload.array(),
  ctrlWrapper(sendShliakhFiles)
);

module.exports = shliakhRouter;
