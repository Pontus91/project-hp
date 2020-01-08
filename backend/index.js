const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');
const config = require('./config/config');
const userRoutes = require('./API/userRoutes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const settings = require('./config/settings');
const ratingRoutes = require('./API/ratingRoutes');

/**
 * Function that connects to the database.
 */
connectToDb();

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use(session({
  secret: settings.cookieSecret,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new MongoStore({
    mongooseConnection: global.db,
    collection: 's',
    ttl: 14 * 24 * 60 * 60
  })
}));

app.get('/', (req, res) => res.send('Welcome To Hundpassnings server'));


app.use(userRoutes, ratingRoutes);
app.listen(config.PORT, () => console.log(`Project HP server ligger på port ${config.PORT}`));