const express = require('express');
const setup = require('./setup');

const app = express();
setup.load(app);

app.listen(process.env.PORT || 5000, () => {
    console.log('Express server listening on port 3000');
});