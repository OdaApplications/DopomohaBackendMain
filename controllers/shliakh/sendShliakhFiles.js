const fs = require("fs");
const path = require("path");
const { mailer } = require("../../models");

const sendShliakhFiles = async (req, res, next) => {
  const {
    to = "nickleso.work@gmail.com, trant755@gmail.com, Valentyn.patskan@gmail.com",
    subject = "test email",
    message = "test",
    // headers = "Content-Disposition: attachment;",
    organizationName = "tes",
    organizationTel = "test phone number",
  } = req.body;

  // console.log(to, subject, message, organizationName, organizationTel);

  try {
    // Отримати шляхи до завантажених файлів з req.files
    const uploadedFiles = req.files;

    // Перевірити, чи були завантажені файли
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).json({
        message: "No uploaded files",
        code: 400,
      });
    }

    const attachments = [];

    for await (const [index, file] of Object.entries(uploadedFiles)) {
      attachments.push({
        filename: file.originalname,
        content: fs.createReadStream(file.path),
      });
    }

    // Надіслати листа з вкладенням
    await mailer.sendMail({
      from: "info@dopomoha.carpathia.gov.ua",
      to,
      subject: `${organizationName}. Заявка на Шлях.`,
      text: `${organizationName}. Заявка на Шлях. 
      \nКонтактний номер телефону: ${organizationTel}`,

      attachments,
      // headers,
    });

    // Видалити тимчасові файли
    for (const file of uploadedFiles) {
      fs.unlink(file.path, (err) => {
        if (err) console.log(err);
      });
    }

    return res.status(200).json({
      message: "success",
      code: 200,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { sendShliakhFiles };
