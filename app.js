const express = require('express');
const app = express();
const port = 3000;

const applicationEnv = process.env.Application_Environment;
const applicationName = process.env.Application_Name;
const connectionString = process.env.Application_ConnectionString;
const applicationPassword = process.env.Application_Password;

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/env', (req, res) => {
  res.json({
    applicationEnv,
    applicationName,
    connectionString,
    applicationPassword,
  });
});

app.listen(port, () => {
  console.log(`DOB Calculator app listening at http://localhost:${port}`);
});
