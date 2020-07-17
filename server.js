const express = require('express');
const path = require('path');
const config = require('config')
const bodyParser = require('body-parser');
const cors = require('cors');
const routerTransaction = require('./routes/routerTransaction')
const winston = require('winston');
const expressWinston = require('express-winston');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
// app.use(expressWinston.logger({
//     transports: [
//         new winston.transports.Console()
//     ],
//     format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.json()
//     ),
//     meta: false,
//     msg: "HTTP {{req.method}} {{req.url}}", expressFormat: true,
//     colorize: false,
//     ignoreRoute: function (req, res) { return false; }
// }));

app.use('/api', routerTransaction)

app.use((req, res, next) => {
    res.status(404);
    res.send({ error: 'Not found' });
    return;
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({ error: err.message });
    return;
});
const PORT = config.get('port');
const hostname = config.get('hostname');

function start() {
    try {
        app.listen(PORT, hostname, () => {
            console.log(`Server running at http://${hostname}:${PORT}/`)
        })

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()

