const Koa = require('koa');

const constants = require('./config/constants');

const app = new Koa();
const middlewares = require('./config/middlewares')(app);

app.listen(constants.PORT, (err) => {
  if(err) throw err;
  console.log(`${constants.APP_NAME} listening on port ${constants.PORT}`);
});