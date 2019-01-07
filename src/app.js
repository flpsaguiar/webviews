const express = require('express');
const setup = require('./setup');

const PORT = process.env.PORT || 3000;

const app = express();
setup.load(app);

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});