const fs = require("fs");
const { mailer } = require("../models");

const sendFiles = async (req, res, next) => {
  const {
    to = "nickleso.work@gmail.com",
    subject = "test email",
    message = "TEST",
    headers = null,
  } = req.body;

  console.log(to, subject, message, headers);

  try {
    // const pathToFile = await createMessagePdf(req.body);
    // const data = fs.readFileSync(pathToFile);

    // res.contentType("application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=shliakh.pdf");

    await mailer.sendMail({
      from: process.env.MAILER_USERNAME,
      to,
      subject,
      text: message,
      // attachments: [
      //   {
      //     filename: "shliakh.pdf",
      //     path: pathToFile,
      //   },
      // ],
    });

    // await res.status(201).send(data);

    next();
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { sendFiles };
