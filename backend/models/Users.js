const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  email: string,
  password: string,
})

const employeeModel = mongoose.model('employee', usersSchema)

module.exports = employeeModel
