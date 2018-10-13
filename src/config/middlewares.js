const bodyParser = require("koa-bodyparser");
const logger = require("koa-logger");

const router = require("../routes");

module.exports = app => {
  app.use(logger());
  app.use(bodyParser());

  app
    .use(router.routes())
    .use(router.allowedMethods());
};
