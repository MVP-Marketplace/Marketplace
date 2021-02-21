require('./db/config');
const cookieParser = require('cookie-parser');

const express = require('express'),
  path = require('path'),

  googleRoutes = require('./routes/open/googleauth'),
  openRoutes = require('./routes/open/index'),
  userRouter = require('./routes/secure/Users'),
  projectRouter = require('./routes/secure/Projects'),
  builderRouter = require('./routes/secure/Builder'),
  ratingRouter = require('./routes/secure/Rating'),
  levelRouter = require('./routes/secure/Level');
  (passport = require('./middleware/authentication/index')),

  (fileUpload = require('express-fileupload'));
const app = express();

app.use(passport.initialize());
app.use(express.json());
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
//
app.use('/api', openRoutes);

//specific google login routes routes
app.use(
  '/api/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
);
app.use('/api', googleRoutes);

//authenticated routes will use jwt or google
app.use(
  '/api/*',
  passport.authenticate(['jwt', 'google'], {
    scope: ['profile', 'email'],
    session: false,
  })
);

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/builder', builderRouter);
app.use('/api/rating', ratingRouter);
app.use('/api/level', levelRouter);


if (process.env.NODE_ENV === 'production') {
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

module.exports = app;
