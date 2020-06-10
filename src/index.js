const express = require('express');
const chalk = require('chalk');
require('./db/mongoose');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT;

// Parse all incoming requests as JSON
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(chalk.green.inverse(`App running in port ${port}`));
});
