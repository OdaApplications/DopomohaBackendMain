const fs = require("fs");
const { mailer } = require("../../models");

const createShliakhFiles = async (req, res, next) => {
  console.log("----");
  // const {
  //   to = "nickleso.work@gmail.com",
  //   subject = "test email",
  //   message = "TEST",
  //   headers = null,
  // } = req.body;

  // console.log(to, subject, message, headers);

  try {
    // // Отримати шляхи до завантажених файлів з req.files
    // const uploadedFiles = req.files;

    // // Перевірити, чи були завантажені файли
    // if (!uploadedFiles || uploadedFiles.length === 0) {
    //   return res.status(400).json({
    //     message: "No uploaded files",
    //     code: 400,
    //   });
    // }

    // const attachments = uploadedFiles.map((file) => {
    //   let contentType;

    //   // Перевірити розширення файлу
    //   if (file.originalname.endsWith(".pdf")) {
    //     contentType = "application/pdf";
    //   } else if (file.originalname.endsWith(".zip")) {
    //     contentType = "application/zip";
    //   } else {
    //     // Якщо розширення не відомо, то залишити contentType порожнім або іншим значенням за замовчуванням
    //     contentType = "application/octet-stream"; // Інше значення за замовчуванням
    //   }

    //   return {
    //     filename: file.originalname,
    //     path: file.path,
    //     contentType,
    //   };
    // });

    // // Надіслати листа з вкладенням
    // await mailer.sendMail({
    //   from: process.env.MAILER_USERNAME,
    //   to,
    //   subject,
    //   text: message,
    //   attachments,
    // });

    // // Видалити тимчасові файли
    // for (const file of uploadedFiles) {
    //   fs.unlink(file.path, (err) => {
    //     if (err) console.log(err);
    //   });
    // }

    console.log("success");

    return res.status(200).json({
      message: "success",
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: "send email error",
      code: 500,
    });
  }
};

module.exports = { createShliakhFiles };
