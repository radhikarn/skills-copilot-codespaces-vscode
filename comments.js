// Create web server 

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/', (req, res) => {
  const { name, comment } = req.body;
  const data = `${name} said: ${comment}\n`;
  const filePath = path.join(__dirname, '../data/comments.txt');
  fs.appendFile(filePath, data, (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  res.redirect('/comments');
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/comments.html'));
});

module.exports = router;