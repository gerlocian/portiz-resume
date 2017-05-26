'use strict';

import path from 'path';
import express from 'express';

const app = express();

app.use('/assets', express.static('dist'))

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html').sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(3000);
