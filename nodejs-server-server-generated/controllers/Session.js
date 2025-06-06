'use strict';

var utils = require('../utils/writer.js');
var Session = require('../service/SessionService.js');

module.exports.startSession = function startSession (req, res, next, body) {
  Session.startSession(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
