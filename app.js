// import express from 'express';
// const app = express();

// app.get('/user/:id/:edit', (req, res) => {
//   const userId = req.params.id;
//   const edit = req.params.edit;

//   res.send(`User ID is ${userId} ${edit}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

import express from 'express';
import cookieParser from '`cookie-parser';

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
  res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
  const theme = req.cookies['theme'];
  res.send(`Cookie theme: ${theme}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
