const fs = require("fs");
const path = require("path");
const { mailer } = require("../../models");

const sendShliakhFiles = async (req, res, next) => {
  const {
    subject = "test email",
    message = "test",
    organizationMail = null,
    organizationName = "test name",
    organizationTel = "test phone number",
  } = req.body;

  const emailList = `${organizationMail}, info@dopomoha.carpathia.gov.ua, admin@carpathia.gov.ua, peretin.kordon@gmail.com`;

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

    const date = new Date();

    // Надіслати лист з вкладенням
    await mailer.sendMail({
      from: "info@dopomoha.carpathia.gov.ua",
      to: emailList,
      organizationMail,
      subject: `${organizationName}. Заявка на Шлях.`,
      text: `${organizationName}. Заявка на Шлях. 
      \nDate: ${date.toLocaleString()}
      \nКонтактний номер телефону: ${organizationTel}
      \nКонтактний e-mail: ${organizationMail}`,

      attachments,
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
