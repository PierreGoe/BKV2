const express = require('express');
const cors = require('cors');
const { db } = require('./conf');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', async (req, res) => {
  try {
    const [rows] = await db.query(`
    
    SELECT bkcode FROM Codes
    ORDER BY bkcode ASC
    LIMIT 1;
    `);
    // await db.query(`

    // DELETE FROM Codes LIMIT 1
    // `);

    res.send(rows);
  } catch (err) {
    console.warn('Beware, we had an error on GET /test !', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.post('/test', async (req, res) => {
  try {
    const { bkcode, date } = req.body;
    await db.query(
      `
        INSERT INTO Codes (bkcode, date) 
        VALUES (?, ?);
      `,
      [bkcode, date]
    );
    res.status(201).send(`code insert in DB`);
  } catch (err) {
    console.warn('Beware, we had an error on POST /test!', err);
    res.status(500).send('Achtung ! I iz broken ! é_è');
  }
});

app.use('/', (req, res) => {
  res.send('API hi');
});

app.listen(5050, () => {
  console.log('API now available on http://localhost:5050 !');
});
