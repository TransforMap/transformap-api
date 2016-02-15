const _ = require('lodash')
const loggers = require('inv-loggers')

const utils = {
  // Couchdb uuid
  isUuid: function (id) {
    return _.isString(id) && /^[0-9a-f]{32}$/.test(id)
  }
}

module.exports = _.extend(utils, _, loggers)
