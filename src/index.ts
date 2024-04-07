import express, { Request, Response } from 'express';
import { router } from './router/index.router';
import path from 'path';

const app = express();
const port = 3200;

var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'components')))
app.use(express.static(path.join(__dirname, '../dist')))

router(app)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


