const SlackAPI = require('../utils/slack');

const sendSlackInvite = async (ctx, next) => {
  try {
    const { email } = ctx.request.body;
    console.log(ctx.request.body);
    await SlackAPI.sendInvite(email);
    ctx.status = 200;
    ctx.body = { message: `An invite has been sent to ${email}` };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { message: err.message };
  }
};

module.exports = {
  sendSlackInvite
};