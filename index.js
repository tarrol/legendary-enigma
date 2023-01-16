const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

initialize();

function initialize() {
  prompts();
}

function prompts() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'Select an option',
        choices: [
          {
            //view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
            name: "View All Departments",
            value: "VIEW_EMPLOYEES"
          },
          {
            name: "View All Roles",
            value: ""
          },
          {
            name: "View All Employees",
            value: ""
          },
          {
            name: "Add a Department",
            value: ""
          },
          {
            name: "Add a Role",
            value: ""
          },
          {
            name: "Add an Employee",
            value: ""
          },
          {
            name: "Update an Employee's Role",
            value: ""
          },
        ]
      }
    ]
    )
}




