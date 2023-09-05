const testController = async (req, res, next) => {
  return res.status(200).json({ message: "test controller" });
};

module.exports = { testController };
