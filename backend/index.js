const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

const greeting = process.env.GREETING_MESSAGE || 'Hello default!';
const logLevel = process.env.LOG_LEVEL || 'info';
const dbPassword = process.env.DB_PASSWORD ? '***REDACTED***' : 'Not set';
const apiKey = process.env.API_KEY ? '***REDACTED***' : 'Not set';

let fileConfig = 'not loaded';
let credentials = 'not loaded';

try {
  fileConfig = fs.readFileSync('/etc/app/config/app.properties', 'utf8');
} catch {}

try {
  credentials = '***REDACTED***'; // nicht loggen!
} catch {}

console.log(`[${logLevel}] Greeting: ${greeting}`);
console.log(`[${logLevel}] DB Password: ${dbPassword}`);
console.log(`[${logLevel}] API Key: ${apiKey}`);
console.log(`[${logLevel}] File config: ${fileConfig}`);
console.log(`[${logLevel}] Credentials: ${credentials}`);

app.get('/', (req, res) => {
  res.send('App is running!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});