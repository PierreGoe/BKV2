const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/code', async (req, res) => {
  const code = [{ value: 'bk99999' }, { value: 'bk99999' }];
  res.send(code);
});

app.use('/', (req, res) => {
  res.send('API hi');
});

app.listen(5050, () => {
  console.log('Terra Battle API now available on http://localhost:5050 !');
});
