const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express();
app.use(cors());

app.get('/code', async (req, res) => {
  (async () => {
    // Go to Final page of Form.
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.bk-feedback-de.com/Index.aspx?c=051011');

    /* eslint-disable */
    for (let index = 0; index < 21; index += 1) {
      await page
        .waitForSelector('#NextButton')
        .then(() => page.click('#NextButton'))
        .then(() => console.log(index));
    }
    /* eslint-disable */

    // Take result in Final page.
    await page.waitForSelector('.ValCode');
    const element = await page.$('.ValCode');
    const elementProperty = await element.getProperty('innerHTML');
    const innerHtml = await elementProperty.jsonValue();
    const result = await innerHtml.replace('Validierungscode: ', '');
    await browser.close();
    await res.send([{ value: result }]);
  })();
});

app.use('/', (req, res) => {
  res.send('API hi');
});

app.listen(5050, () => {
  console.log('API now available on http://localhost:5050 !');
});
