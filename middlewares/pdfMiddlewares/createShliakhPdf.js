const fs = require("fs");
const path = require("path");
const PdfPrinter = require("pdfmake");

const createShliakhPdf = async (req, res, next) => {
  const {
    organizationName = "дані відсутні",
    pibDirector = "дані відсутні",
    organizationType = "дані відсутні",
    organizationCode = "дані відсутні",
    organizationAdress = "дані відсутні",
    organizationTel = "дані відсутні",
    organizationMail = "дані відсутні",
    pibContactPerson = "дані відсутні",
    telContactPerson = "дані відсутні",
    daysCount = "дані відсутні",
    directorPosition = "дані відсутні",

    drivers = "дані відсутні",
  } = req.body;

  console.log(
    "++:",
    organizationName,
    pibDirector,
    organizationType,
    organizationCode,
    organizationAdress,
    organizationTel,
    organizationMail,
    pibContactPerson,
    telContactPerson,
    daysCount,
    directorPosition,

    drivers
  );

  const firmFullName = `${organizationType} ${organizationName}, ${organizationAdress}`;
  const date = new Date();

  const pibDirectorArray = pibDirector.split(" ");
  const firstNameFirstLetter = pibDirectorArray[1][0].toUpperCase();
  const BNameFirstLetter = pibDirectorArray[2][0].toUpperCase();

  const fullNameForSign = pibDirector;

  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  try {
    const fullDate = `«${date.getDate()}» ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;

    // const newDrivers = [];
    // let updatedDrivers = [];

    const createAmountOfDrivers = function (x) {
      let k = 0;
      let j = 8;

      for (let i = 0; i < x.length / 8; i++) {
        updatedDrivers = [];
        let newItem = x.slice(k, j);
        let day = newItem[3];
        let month = newItem[4];
        let year = newItem[5];
        let driverBirthDate = `${day}.${month}.${year}`;

        newItem.splice(3, 3, driverBirthDate);

        newItem.splice(2, 0, `${firmFullName}`);

        newItem.unshift(i + 1);

        updatedDrivers.push(newItem[0]);
        updatedDrivers.push(newItem[1]);
        updatedDrivers.push(newItem[5]);
        updatedDrivers.push(newItem[2]);
        updatedDrivers.push(newItem[4]);
        updatedDrivers.push(
          `${newItem[3]}, ЄДРПОУ ${organizationCodeForTable}`
        );
        updatedDrivers.push(newItem[6]);
        updatedDrivers.push(newItem[7]);
        newDrivers.push([...updatedDrivers]);
        k += 8;
        j += 8;
      }
    };

    // createAmountOfDrivers(valDrivers);

    const headers = [
      "№ п/п",
      `ПІБ водія`,
      "Дата народження водія",
      "Серія закордонного паспорта водія",
      "Номер закордонного паспорта водія",
      "Назва компанії",
      "Номер телефону водія",
      "Email водія",
    ];

    newDrivers.unshift(headers);
    const arrDrivers = [...newDrivers];

    const fonts = {
      TimesNew: {
        normal: path.join(process.cwd(), "fonts", "times", "times.ttf"),
      },
    };

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
          text: `${organizationType.toUpperCase()}`,
          alignment: "center",
          fontSize: 14,
        },
        {
          text: `${organizationName.toUpperCase()}`,
          alignment: "center",
          fontSize: 14,
        },
        {
          text: `${organizationAdress}, тел. ${organizationTel},`,
          alignment: "center",
          fontSize: 12,
        },
        {
          text: `код ЄДРПОУ ${organizationCode}, e-mail: ${organizationMail}`,
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
          text: `в'їзд в Україну в спрощеному порядку для доставки гуманітарної допомоги з країн Європейського Союзу. Перетин кордону буде здійснюватися неодноразово для надання гуманітарної допомоги. Строк дії перетину кордону у спрощеному порядку ${daysCount} днів.`,
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
          text: `Набувач гуманітарної допомоги: ${organizationName} код ЄДРПОУ ${organizationCode}, ${organizationAdress}, e-mail: ${organizationMail}.`,
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
          text: `${pibContactPerson}, номер телефону ${telContactPerson}`,
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
          text: `${directorPosition}`,
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
        {
          table: {
            widths: [
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
            ],
            body: [...arrDrivers],
          },
          alignment: "left",
          margin: [0, 16, 0, 0],
          fontSize: 10,
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
          text: `${directorPosition}`,
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
    });

    pdfDoc.end();

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