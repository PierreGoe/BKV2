const express = require('express');
const cors = require('cors');
const date = require('date-and-time');
const { db } = require('./conf');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/code', async (req, res) => {
  const now = new Date();

  try {
    const IP = req.ip;
    const [UserInDB] = await db.query(
      `
    SELECT lastVisit userIP FROM Logs WHERE  userIP=  ? AND DATE_ADD(lastVisit,INTERVAL 1 MINUTE) > NOW();
    `,
      [IP]
    );
    if (UserInDB.length) {
      res.status(403).send('Error: 403');
    } else {
      const [rows] = await db.query(`
    
    SELECT bkcode FROM Codes
    ORDER BY bkcode DESC
    LIMIT 1;
    `);
      // await db.query(`

      // DELETE FROM Codes LIMIT 1
      // `);
      await db.query(
        `
    INSERT INTO Logs (UserIp, lastVisit) VALUES (? , ?);`,
        [IP, date.format(now, 'YYYY/MM/DD HH:mm:ss')]
      );

      res.send(rows);
    }
  } catch (err) {
    console.log(`-----${err}`);
    console.warn('Beware, we had an error on GET /code !', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.post('/code', async (req, res) => {
  try {
    const { bkcode, dateCode } = req.body;
    await db.query(
      `
        INSERT INTO Codes (bkcode, date) 
        VALUES (?, ?);
      `,
      [bkcode, dateCode]
    );
    res.status(201).send(`code insert in DB`);
  } catch (err) {
    console.warn('Beware, we had an error on POST /code!', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.listen(5050, () => {
  console.log('API now available on http://localhost:5050 !');
});
