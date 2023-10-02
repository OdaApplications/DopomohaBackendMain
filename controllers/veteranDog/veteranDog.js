const { pool } = require("../../models");

const veteranDog = async (req, res, next) => {
  try {
    const newDriverQuery =
      "INSERT INTO veteran_dog (ПІБ, `Дата народження`, `Попереднє місце служби`, `Дата звільнення з військової служби`, `Підстава звільнення`, `Місце фактичного проживання`, `Контактний номер телефону`) VALUES (?, ?, ?, ?, ?, ?, ?)";

    pool.query(
      newDriverQuery,
      [
        req.body["Ім'я"] +
          " " +
          req.body["Прізвище"] +
          " " +
          req.body["По-батькові"],
        req.body["Дата-народження"],
        req.body["Попереднє-місце-служби"],
        req.body["Дата-звільнення-з-військової-служби"],
        req.body["Підстава-звільнення"],
        req.body["Місце-фактичного-проживання"],
        req.body["Контактний-номер-телефону"],
      ],

      (err, result) => {
        if (err) {
          return res.status(404).json({
            message: err.message,
            code: 404,
          });
        }

        return res.status(201).json({
          message: "veteran dog data added",
          code: 201,
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { veteranDog };
