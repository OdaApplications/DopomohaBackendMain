const fs = require("fs");

const sendShliakhFiles = async (req, res, next) => {
  const files = req.files;

  console.log("files:", files);

  try {
    const files = req.files; // Отримуємо масив завантажених файлів
    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "No files uploaded",
        code: 400,
      });
    }

    // Зберігаємо файли у директорії temp
    const savedFiles = [];
    for (const file of files) {
      console.log("++", file);
      const { path: tempUpload, originalname } = file;
      // Тут зберігайте файли в директорії temp, як вам потрібно
      // Наприклад, використовуючи fs.copyFile або інші методи
      savedFiles.push({ tempUpload, originalname });
    }

    return res.status(200).json({
      message: "Files uploaded successfully",
      code: 200,
      files: savedFiles,
    });
    // fs.unlink(pathToFile, (err) => {
    //   if (err) {
    //     return res.status(404).json({
    //       message: "file error",
    //       code: 404,
    //     });
    //   }

    //   return res.status(200).json({
    //     message: "message sent",
    //     code: 200,
    //   });
    // });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

module.exports = { sendShliakhFiles };
