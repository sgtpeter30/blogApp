const dotenv = require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const morgan = require('morgan');
const cors = require('cors');
const LocalStrategy = require('passport-local').Strategy;
const mongoMemoryServer = require('mongodb-memory-server');
const cookieSession = require('cookie-session');
const routes = require('./routes');
const User = require('./models/User');

const PORT = process.env.PORT || 5000;
let mongo;

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ['31ewefsfdvx2er'],
  }),
);
app.use(morgan('combined'));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

const start = async () => {
  mongo = new mongoMemoryServer.MongoMemoryServer();
  const mongoUri = await mongo.getUri();
  mongoose.connect(mongoUri, {
    useNewUrlParser: true,
  });

  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error:'));

  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
};

start();
