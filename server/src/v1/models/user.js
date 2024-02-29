const mongoose = require('mongoose')
const { schemaOptions } = require('./modelOptions')
/**
 * Normalize a port into a number, string, or false.
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, schemaOptions)

module.exports = mongoose.model('User', userSchema)
