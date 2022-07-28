require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connect_DB = require('./config/connectDB');
const version1 = require('./versionRoute');
const fileupload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileupload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', version1);

const PORT = process.env.PORT || 3000;

connect_DB();

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('This is Assignment Backend');
});