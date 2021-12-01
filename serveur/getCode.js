const date = require('date-and-time');
const puppeteer = require('puppeteer');
/* eslint-disable */
const {
  db,
} = require('/home/wilder/www/BKV2/BurgerKingProject/serveur/conf.js');
/* eslint-disable */
const now = new Date();

(async function getCode() {
  try {
    const [rows] = await db.query(`
    SELECT bkcode FROM Codes;
    `);
    if (rows.length < 10) {
      /* eslint-disable */
      try {
        (async () => {
          const browser = await puppeteer.launch({
            headless: false,
          });
          const page = await browser.newPage();
          await page.goto('https://www.bk-feedback-de.com/Index.aspx?c=051011');
          for (let index = 0; index < 21; index += 1) {
            await page
              .waitForSelector('#NextButton')
              .then(() => page.click('#NextButton'))
              .then(() => console.log(index));
          }
          /* eslint-disable */
          await page.waitForSelector('.ValCode');
          const element = await page.$('.ValCode');
          const elementProperty = await element.getProperty('innerHTML');
          const innerHtml = await elementProperty.jsonValue();
          const result = await innerHtml.replace('Validierungscode: ', '');
          await browser.close();
          await db.query(
            `
            INSERT INTO Codes (bkcode, date) 
            VALUES (?, ?);
          `,
            [result, date.format(now, 'YYYY/MM/DD HH:mm:ss')]
          );
          process.exit(1);
        })();
      } catch (error) {
        process.exit(1);
      }
    } else {
      console.log('breack');
      process.exit(1);
    }
  } catch (err) {
    console.warn('Beware, we had an error on GET /code !', err);
    process.exit(1);
  }
})();
