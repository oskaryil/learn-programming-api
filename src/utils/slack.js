const request = require('request-promise-native');

const constants = require('../config/constants');

const sendInvite = async email => {
  try {
    if(!email) throw new Error('An email must be provided');
    const res = await request.get(`https://slack.com/api/users.admin.invite?token=${constants.SLACK_LEGACY_TOKEN}&email=${email}`)
    const json = JSON.parse(res); 
    if(!json.ok && json.error) throw new Error(json.error);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  sendInvite
};