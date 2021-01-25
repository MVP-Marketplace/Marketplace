require('./db/config');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const express = require('express'),
  path = require('path'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/Users'),
  projectRouter = require('./routes/secure/Projects'),
  builderRouter = require('./routes/secure/Builder'),
  ratingRouter = require('./routes/secure/Rating'),
  passport = require('./middleware/authentication/index'),
  fileUpload = require('express-fileupload');
const app = express();
app.use(passport.initialize());
app.use(express.json());

app.use('/api', openRoutes);
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/images',
  })
);

//how to make all of these routes authenticated by EITHER jwt or google?
app.use('/api/*', passport.authenticate('jwt', { session: false }));

// console.log(passport)
// console.log('here i am')

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/builder', builderRouter);
app.use('/api/rating', ratingRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
