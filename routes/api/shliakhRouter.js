const express = require("express");
const shliakhRouter = express.Router();

const { ctrlWrapper, upload, createShliakhPdf } = require("../../middlewares");

const {
  createShliakhFiles,
  sendShliakhFiles,
} = require("../../controllers/shliakh");

// pdf creation
shliakhRouter.post(
  "/create-shliakh",
  createShliakhPdf,
  ctrlWrapper(createShliakhFiles)
);

// pdf delivery
shliakhRouter.post(
  "/send-shliakh",
  upload.array(),
  ctrlWrapper(sendShliakhFiles)
);

module.exports = shliakhRouter;
