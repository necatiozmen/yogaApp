const express = require('express');
const app = express();
const router = require('./routes/router');

const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(router);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('SERVER IS RUNNING ON 5000'));
