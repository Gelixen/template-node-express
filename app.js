const express = require('express');
const logger = require('./middleware/logger');

const app = express()
const port = 7070

// logger middleware
app.use(logger);

// bellow optional:
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(port, () => console.log(`⚡️[server]: Server is running at http://localhost:${port}`))