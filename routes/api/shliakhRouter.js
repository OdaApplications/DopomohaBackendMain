const express = require("express");
const shliakhRouter = express.Router();

const { ctrlWrapper, upload } = require("../../middlewares");

const {
  createShliakhPdf,
  sendShliakhFiles,
} = require("../../controllers/shliakh");

// pdf creation
shliakhRouter.post("/create-shliakh", ctrlWrapper(createShliakhPdf));

// pdf delivery
shliakhRouter.post(
  "/send-shliakh",
  upload.array("files[]"),
  ctrlWrapper(sendShliakhFiles)
);

module.exports = shliakhRouter;
