const { ctrlWrapper } = require("./ctrlWrapper");
const { sendFiles } = require("./sendFiles");
const { createShliakhPdf, createPdfTest } = require("./pdfMiddlewares");
const upload = require("./upload");

module.exports = {
  ctrlWrapper,
  sendFiles,
  createShliakhPdf,
  createPdfTest,
  upload,
};
