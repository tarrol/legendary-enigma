const inquirer = require('inquirer');
const tables = require('console.table')
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
          {
            name: "Exit",
            value: "closePrompt"
          },
        ]
      }
    ]).then(res => {
      let response = res.choice;
      switch (response) {
        case "viewDepartments": resDepartment(); break;
        case "viewRoles": resRoles(); break;
        case "viewEmployees": resEmployees(); break;
        case "addDepartment": resAddDepartment(); break;
        case "addRole": resAddRole(); break;
        case "addEmployee": resAddEmployee(); break;
        case "updateEmployee": resUpdateEmployee(); break;
        case "closePrompt":
          console.log("Exiting...");
          process.exit()
          break;
        default: quit();
      }
    })
  function resDepartment() {
    fncs.viewDepartment()
      .then(([rows]) => {
        let departments = rows;
        console.table(departments);
        console.log("\n");
      })
      .then(() => prompts());
  }
  function resRoles() {
    fncs.viewRoles()
      .then(([rows]) => {
        let roles = rows;
        console.table(roles);
        console.log("\n");
      })
      .then(() => prompts());
  }
  function resEmployees() {
    fncs.viewEmployees()
      .then(([rows]) => {
        let employees = rows;
        console.table(employees);
        console.log("\n");
      })
      .then(() => prompts());
  }
}


module.exports = { prompts }