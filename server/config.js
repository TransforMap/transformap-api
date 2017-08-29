const americano = require('americano')
const passport = require('./middlewares/passport')

const cors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

module.exports = {
  common: [
    americano.bodyParser({limit: '50mb'}),
    americano.methodOverride(),
    americano.errorHandler({
      dumpExceptions: true,
      showStack: true
    }),
    cors,
    passport.initialize,
    passport.session({secret: 'keyboard cat', resave: true, saveUninitialized: true, pauseStream: true}),
  ],
  development: [
    americano.logger('dev')
  ],
  production: [
    americano.logger('short')
  ]
}
