const Router = require('koa-router');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Learn Programming API'
});

module.exports = router;
