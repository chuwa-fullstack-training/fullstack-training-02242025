const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userRouter = require('./routers/users');
const postRouter = require('./routers/posts');
const connectDB = require('./db');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }
  })
);

const authMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    req.session.user = { username };
    res.send('Logged in');
  } else {
    res.status(400).send('Invalid credentials');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

app.get('/api/protected', authMiddleware, (req, res) => {
  res.send('Protected data');
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
