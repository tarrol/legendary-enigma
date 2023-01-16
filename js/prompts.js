const inquirer = require('inquirer');
const fncs = require('./functions');

function prompts() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Select an option',
        choices: [
          {
            name: "View All Departments",
            value: "viewDepartments"
          },
          {
            name: "View All Roles",
            value: "viewRoles"
          },
          {
            name: "View All Employees",
            value: "viewEmployees"
          },
          {
            name: "Add a Department",
            value: "addDepartment"
          },
          {
            name: "Add a Role",
            value: "addRole"
          },
          {
            name: "Add an Employee",
            value: "addEmployee"
          },
          {
            name: "Update an Employee's Role",
            value: "updateEmployee"
          },
        ]
      }
    ]).then(res => {
      let response = res.choice;
      switch (response) {
        case "viewDepartments": console.log(1); break;
        default: console.log(2);
      }
    })
}


module.exports = { prompts }