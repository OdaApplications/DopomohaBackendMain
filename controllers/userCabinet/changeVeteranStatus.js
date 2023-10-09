const { pool } = require("../../models");

const changeVeteranStatus = async (req, res, next) => {
  const { ID = null } = req.user;

  console.log("req.user in End:", req.user);
  console.log("ID:", ID);

  try {
    const newDriverQuery = `INSERT INTO dc_users (veteran_status) VALUES (?) WHERE ID = ?`;

    pool.query(newDriverQuery, [0, ID], (err, result) => {
      if (err) {
        return res.status(404).json({
          message: err.message,
          code: 404,
        });
      }

      return res.status(201).json({
        message: "poll data added",
        code: 201,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { changeVeteranStatus };
