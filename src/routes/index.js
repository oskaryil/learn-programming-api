const Router = require('koa-router');

const inviteController = require('../controllers/invite.controller');

const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Learn Programming API'
})
router.post('/invite', inviteController.sendSlackInvite);

module.exports = router;
