const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const tournamentsRouter = require('./routes/tournaments');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/tournaments', tournamentsRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
