const { validationResult } = require('express-validator')
const mongoose = require('mongoose')
/**
 * Normalize a port into a number, string, or false.
 */
exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

exports.isObjectId = (value) => mongoose.Types.ObjectId.isValid(value)
