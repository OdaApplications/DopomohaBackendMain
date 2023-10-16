const express = require("express");
const veteranServicesRouter = express.Router();

const { ctrlWrapper } = require("../../middlewares");
const {
  getAllServicesByVeteranId,
} = require("../../controllers/veteranServices");

veteranServicesRouter.get(
  "/all-veteran-services/:id",
  ctrlWrapper(getAllServicesByVeteranId)
);

module.exports = veteranServicesRouter;
