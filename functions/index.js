const functions = require('firebase-functions');
const expressApp = require('express')();
require('dotenv').config();

console.log(process.env.CONFIG_TEXT);

const controller = (req, res, next) => {
  console.log('giang');
  next();
};
const controller2 = (req, res, next) => {
  console.log('giang2', process.env.CONFIG_TEXT);
  res.send(process.env.CONFIG_TEXT);
  res.end();
};
expressApp.route('/').get([
  controller,
  controller2
]);

expressApp.get('/team', (req, res) => {
  res.send(process.env.PROJECT_TEAM);
});

expressApp.listen(3000, () => {
  console.log('app run on port 3000');
});

exports.expersityApi = functions.https.onRequest(expressApp);
