const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');
const config = require('./config/config');
const userRoutes = require('./API/userRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');


connectToDb();

const app = express()

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Welcome To Hundpassnings server'));


app.use(userRoutes);
app.listen(config.PORT, () => console.log(`Project HP server ligger på port ${config.PORT}`));