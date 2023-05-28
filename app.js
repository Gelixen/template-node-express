const express = require('express');
const logger = require('./middleware/logger');

const rabbitRoutes = require('./rabbits/routes/rabbits.routes')

const app = express()
const PORT = process.env.PORT || 7070

// logger middleware
app.use(logger);

// routes
app.use('/rabbits', rabbitRoutes)

// bellow optional:
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`))