const fs = require("fs");
const { mailer } = require("../../models");

const sendAmbassadorData = async (req, res, next) => {
  console.log("req.body:", req.body);
  console.log("req.files:", req.files);

  try {
    // Отримати шляхи до завантажених файлів з req.files
    const uploadedFiles = req.files;
    const attachments = [];

    const dateTransformer = () => {
      const date = new Date();
      const currentDate = date.toLocaleDateString();
      const currentTime = date.toLocaleTimeString();
      const time = `${currentDate}, ${currentTime}`;
      return time;
    };

    // Перевірити, чи були завантажені файли
    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).json({
        message: "No uploaded files",
        code: 400,
      });
    }

    for await (const [index, file] of Object.entries(uploadedFiles)) {
      attachments.push({
        filename: file.originalname,
        content: fs.createReadStream(file.path),
      });
    }

    // Надіслати лист з вкладенням
    await mailer.sendMail({
      from: "info@dopomoha.carpathia.gov.ua",
      to: "nickleso.work@gmail.com",
      subject: "Заявка на Амбасадора",
      text: `Заявка на Амбасадора надіслана.
      \nДата: ${dateTransformer()}
      `,

      // bcc: bccEmailList,
      attachments,
    });

    // Видалити тимчасові файли
    for (const file of uploadedFiles) {
      console.log("file:", file);

      fs.unlink(file.path, (err) => {
        if (err) console.log(err);
      });
    }

    return res.status(201).json({
      message: "ambassador data sended",
      code: 201,
    });
  } catch (error) {
    console.log("send data:", err.message);
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { sendAmbassadorData };
