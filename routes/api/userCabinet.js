const express = require("express");
const userCabinet = express.Router();

const { ctrlWrapper, getUserData, upload } = require("../../middlewares");
const {
  changeVeteranStatus,
} = require("../../controllers/userCabinet/changeVeteranStatus");

changeVeteranStatus;

// change vetaran stutus and send email
userCabinet.post(
  "/vateran/change-status",
  upload.array("files"),
  getUserData,
  ctrlWrapper(changeVeteranStatus)
);

module.exports = userCabinet;
