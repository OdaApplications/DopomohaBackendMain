const { addVeteranToService } = require("./addVeteranToService");
const { getAllServicesByVeteranId } = require("./getAllServicesByVeteranId");
const {
  getVeteranServicesTablesList,
} = require("./getVeteranServicesTablesList");

module.exports = {
  getAllServicesByVeteranId,
  getVeteranServicesTablesList,
  addVeteranToService,
};
