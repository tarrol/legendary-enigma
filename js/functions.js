const connection = require('../db/connection')

function viewDepartment() {
  return connection.promise().query("SELECT * from department;")
}
function viewRoles() {
  return connection.promise().query("SELECT * from role;")
}
function viewEmployees() {
  return connection.promise().query("SELECT * from employee;")
}

module.exports = { viewDepartment, viewRoles, viewEmployees }