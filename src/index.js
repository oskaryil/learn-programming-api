const Koa = require('koa');

const app = Koa();

app.listen(constants.PORT, (err) => {
  if(err) throw err;
  console.log(`App listening on port ${constans.PORT}`);
});