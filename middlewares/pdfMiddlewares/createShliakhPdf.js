const fs = require("fs");
const path = require("path");
const PdfPrinter = require("pdfmake");

const createShliakhPdf = async (req, res, next) => {
  //   const shliakhData = req.body;

  const nameSubject = `ТОВ "Піддриємтсво"`;
  const namePIP = "Івановський Михайло Михайлович";
  const opForma = "товариство з обмеженою відповідальністю";
  const addressSubjekt = "м. Ужгород, вул. Собранецька, 4";

  const shliakhData = {
    company: {
      nameSubject,
      namePIP,
      opForma,
      edrpou: "11223344",
      addressSubjekt,
      phoneSubjekt: "+38(050)888-88-88",
      emailSubjekt: "example@mail.com",
      contactName: "Сидор Іван Іванович",
      contactOsobaTel: "+38(050)888-88-88",
      daysNum: "5",
      posada: "директор",
      firmFullName: `${opForma} ${nameSubject}, ${addressSubjekt}`,
      date: new Date(),
    },
  };

  // const firstNameFirstLetter = shliakhData.company.namePIP[1][0].toUpperCase();
  // const BNameFirstLetter = shliakhData.company.namePIP[2][0].toUpperCase();

  // const firstNameFirstLetter = "Л.";
  // const BNameFirstLetter = "К.";
  const fullNameForSign = `${shliakhData.company.namePIP}`;

  // const months = [
  //   "січня",
  //   "лютого",
  //   "березня",
  //   "квітня",
  //   "травня",
  //   "червня",
  //   "липня",
  //   "серпня",
  //   "вересня",
  //   "жовтня",
  //   "листопада",
  //   "грудня",
  // ];

  try {
    // const fullDate = `«${date.getDate()}» ${
    //   months[date.getMonth()]
    // } ${date.getFullYear()}`;

    // const newDrivers = [];
    // let updatedDrivers = [];

    // const createAmountOfDrivers = function (x) {
    //   let k = 0;
    //   let j = 8;
    //   const edrpouForTable = document.querySelector('[name = "edrpou"]').value;
    //   for (let i = 0; i < x.length / 8; i++) {
    //     updatedDrivers = [];
    //     let newItem = x.slice(k, j);
    //     let day = newItem[3];
    //     let month = newItem[4];
    //     let year = newItem[5];
    //     let driverBirthDate = `${day}.${month}.${year}`;

    //     newItem.splice(3, 3, driverBirthDate);

    //     newItem.splice(2, 0, `${firmFullName}`);

    //     newItem.unshift(i + 1);

    //     updatedDrivers.push(newItem[0]);
    //     updatedDrivers.push(newItem[1]);
    //     updatedDrivers.push(newItem[5]);
    //     updatedDrivers.push(newItem[2]);
    //     updatedDrivers.push(newItem[4]);
    //     updatedDrivers.push(`${newItem[3]}, ЄДРПОУ ${edrpouForTable}`);
    //     updatedDrivers.push(newItem[6]);
    //     updatedDrivers.push(newItem[7]);
    //     newDrivers.push([...updatedDrivers]);
    //     k += 8;
    //     j += 8;
    //   }
    // };

    // createAmountOfDrivers(valDrivers);

    // const headers = [
    //   "№ п/п",
    //   `ПІБ водія`,
    //   "Дата народження водія",
    //   "Серія закордонного паспорта водія",
    //   "Номер закордонного паспорта водія",
    //   "Назва компанії",
    //   "Номер телефону водія",
    //   "Email водія",
    // ];

    // newDrivers.unshift(headers);

    const fonts = {
      TimesNew: {
        normal: path.join(process.cwd(), "fonts", "times", "times.ttf"),
      },
    };

    console.log(fonts.TimesNew.normal);
    // const arrDrivers = [...newDrivers];

    const shliakh = {
      info: {
        title: "Текстовий документ PDF",
        autor: "Website",
        subject: "Theme",
        keywords: "ключові",
      },

      pageSize: "A4",
      pageOrientation: "portrait",
      pageMargins: [37.8, 70, 37.8, 45],

      content: [
        {
          text: `${shliakhData.company.opForma.toUpperCase()}`,
          alignment: "center",
          fontSize: 14,
        },
        {
          text: `${shliakhData.company.nameSubject.toUpperCase()}`,
          alignment: "center",
          fontSize: 14,
        },
        {
          text: `${shliakhData.company.addressSubjekt}, тел. ${shliakhData.company.phoneSubjekt},`,
          alignment: "center",
          fontSize: 12,
        },
        {
          text: `код ЄДРПОУ ${shliakhData.company.edrpou}, e-mail: ${shliakhData.company.emailSubjekt}`,
          alignment: "center",
          fontSize: 12,
        },
        {
          text: " ",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: "Голові Закарпатської області",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: "державної адміністрації - начальнику",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: "обласної військової адміністрації",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: " ",
          margin: [243, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: "Микиті В.Ф.",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: "admin@carpathia.gov.ua",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: " ",
          margin: [243, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `Шановний Вікторе Федоровичу!`,
          alignment: "center",
          fontSize: 14,
        },
        {
          text: " ",
          margin: [243, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `Прошу всебічного сприяння у перетині державного кордону на виїзд з України і`,
          alignment: "justified",
          margin: [25, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `в'їзд в Україну в спрощеному порядку для доставки гуманітарної допомоги з країн Європейського Союзу. Перетин кордону буде здійснюватися неодноразово для надання гуманітарної допомоги. Строк дії перетину кордону у спрощеному порядку ${shliakhData.company.daysNum} днів.`,
          alignment: "justified",
          fontSize: 14,
        },
        {
          text: `Гуманітарний вантаж призначений для забезпечення оборони країни, безпеки і`,
          alignment: "justified",
          margin: [25, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `нормалізації життедіяльності населення, правопорядку, недопущення гуманітарної катастрофи в районі збройної агресії Російської Федерації.`,
          alignment: "justified",
          fontSize: 14,
        },
        {
          text: `Набувач гуманітарної допомоги: ${shliakhData.company.nameSubject} код ЄДРПОУ ${shliakhData.company.edrpou}, ${shliakhData.company.addressSubjekt}, e-mail: ${shliakhData.company.emailSubjekt}.`,
          alignment: "justified",
          margin: [25, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `Представник набувача гуманітарної допомоги:`,
          alignment: "justified",
          margin: [25, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: `${shliakhData.company.contactName}, номер телефону ${shliakhData.company.contactOsobaTel}`,
          alignment: "justified",
          fontSize: 14,
        },
        {
          text: "Беремо зобов'язання щодо повернення на територію України транспортних",
          alignment: "justified",
          margin: [25, 0, 0, 0],
          fontSize: 14,
        },
        {
          text: "засобів та водіїв та забезпечення дотримання законодавства України з мобілізаційної підготовки та мобілізації.",
          alignment: "justified",
          fontSize: 14,
        },
        {
          text: "Заздалегідь вдячні за надане сприяння",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: `${shliakhData.company.posada}`,
          alignment: "left",
          fontSize: 14,
        },
        {
          text: `${fullNameForSign}`,
          alignment: "right",
          fontSize: 14,
          margin: [0, -14, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: "Додаток 1",
          alignment: "right",
          fontSize: 14,
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: "ПРОПОЗИЦІЇ",
          alignment: "center",
          fontSize: 14,
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: "щодо виїзду за межі України водіїв в умовах правового режиму воєнного стану",
          alignment: "center",
          fontSize: 14,
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        // {
        //   table: {
        //     widths: [
        //       "auto",
        //       "auto",
        //       "auto",
        //       "auto",
        //       "auto",
        //       "auto",
        //       "auto",
        //       "auto",
        //     ],
        //     // body: [...arrDrivers],
        //   },
        //   alignment: "left",
        //   margin: [0, 16, 0, 0],
        //   fontSize: 10,
        // },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: " ",
          alignment: "justified",
          fontSize: 14,
          margin: [25, 0, 0, 0],
        },
        {
          text: `${shliakhData.company.posada}`,
          alignment: "left",
          fontSize: 14,
        },
        {
          text: `${fullNameForSign}`,
          alignment: "right",
          fontSize: 14,
          margin: [0, -14, 0, 0],
        },
      ],
      defaultStyle: {
        font: "TimesNew",
      },
    };

    const printer = new PdfPrinter(fonts);

    // Використовуйте Buffer для створення PDF асинхронно
    const pdfDoc = printer.createPdfKitDocument(shliakh);
    const pdfChunks = [];

    pdfDoc.on("data", (chunk) => {
      pdfChunks.push(chunk);
    });

    pdfDoc.on("end", () => {
      const pdfBuffer = Buffer.concat(pdfChunks);

      // Надсилайте PDF клієнту
      res.contentType("application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=shliakh.pdf");
      res.status(201).send(pdfBuffer);

      // const outputPath = path.join(__dirname, "shliakh.pdf");
      // const pdfStream = fs.createReadStream(outputPath);
      // pdfStream.pipe(res);
    });

    pdfDoc.end();

    // const printer = new PdfPrinter(fonts);
    // const pdfDoc = printer.createPdfKitDocument(shliakh);

    // // Шлях до папки temp у кореневій директорії
    // const outputPath = path.join(__dirname, "заява.pdf");

    // // Зберігаємо PDF-документ у файл
    // pdfDoc.pipe(fs.createWriteStream(outputPath));
    // pdfDoc.end();

    // // Відправляємо PDF-документ користувачу
    // const pdfFile = fs.readFile(outputPath);

    // res.contentType("application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=shliakh.pdf");

    // res.status(201).send(pdfFile);

    // // return res.status(200).json({
    // //   message: "success",
    // //   code: 200,
    // // });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      messageStack: error.stack,
      code: 500,
    });
  }
};

module.exports = { createShliakhPdf };
