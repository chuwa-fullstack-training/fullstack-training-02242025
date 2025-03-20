const express = require('express');
const employeeRouter = require('./routers/employee');
const companyRouter = require('./routers/companies')
const auth = require('./routers/auth')
const app = express();
const port = 3000;
const connect = require('./mongoconnect');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', employeeRouter);
app.use('/api', companyRouter);
app.use('/api', auth);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
