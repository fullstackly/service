const logger = require('./logger')

const redirectUnmatched = (request, response) => {
    res.redirect('/')
  }

const errorHandler = (error, req, res, next) => {
    logger.error(error.message)  
    next(error)
}

module.exports = { 
    redirectUnmatched,
    errorHandler 
}