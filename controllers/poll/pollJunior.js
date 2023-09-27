const { pool } = require("../../models");

const pollJunior = async (req, res, next) => {
  console.log("++++");

  const {
    sex = null,
    age = null,
    fromHromada = null,
    isVpo = null,
    arriveFrom = null,
    status = null,
    badInHromada = null,
    readyForChangeHrom = null,
    whatWantToChange = null,
    doYouNowEventsInHrom = null,
    whatTypeEventsToIncrease = null,
    wantToOrgEvents = null,
    whereTakeRes = null,
    whatInfoToSee = null,
    isStudOrgsInHrom = null,
    howStudOrgsWork = null,
    isJuniorRadaInHrom = null,
    isJuniorHub = null,
    whatInHuniorHub = null,
  } = req.body;

  try {
    const newDriverQuery =
      "INSERT INTO poll_junior (sex, age, fromHromada, isVpo, arriveFrom, status, badInHromada, readyForChangeHrom, whatWantToChange, doYouNowEventsInHrom, whatTypeEventsToIncrease, wantToOrgEvents, whereTakeRes, whatInfoToSee, isStudOrgsInHrom, howStudOrgsWork, isJuniorRadaInHrom, isJuniorHub, whatInHuniorHub) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    pool.query(
      newDriverQuery,
      [
        sex,
        age,
        fromHromada,
        isVpo,
        arriveFrom,
        status,
        badInHromada,
        readyForChangeHrom,
        whatWantToChange,
        doYouNowEventsInHrom,
        whatTypeEventsToIncrease,
        wantToOrgEvents,
        whereTakeRes,
        whatInfoToSee,
        isStudOrgsInHrom,
        howStudOrgsWork,
        isJuniorRadaInHrom,
        isJuniorHub,
        whatInHuniorHub,
      ],
      (err, result) => {
        if (err) {
          return res.status(404).json({
            message: err.message,
            code: 404,
          });
        }
      }
    );

    return res.status(200).json({
      message: "poll data added",
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { pollJunior };
