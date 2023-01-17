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
  function resAddEmployee() {
    inquirer.prompt(
      [
        {
          type: 'input',
          name: 'employee_first',
          message: 'What is the employee first name',
        },
        {
          type: 'input',
          name: 'employee_last',
          message: 'What is the employee last name?'
        },
        {
          type: 'input',
          name: 'manager_id',
          message: 'Who is their manage? Answer NULL for none',
        },
        {
          type: 'input',
          name: 'role_id',
          message: 'What is their role? Please input a number.'
        },
      ])
      .then(res => {
        let employee = {
          first_name: res.employee_first,
          last_name: res.employee_last,
          manager_id: res.manager_id,
          role_id: res.role_id,
        }
        fncs.addEmployee(employee)
          .then(console.log(`Added ${employee.first_name} ${employee.last_name}`))
          .then(() => prompts());
      })
  }
  function resAddRole() {
    inquirer.prompt(
      [
        {
          type: 'input',
          name: 'role_title',
          message: 'What is the role of the title?'
        },
        {
          type: 'input',
          name: 'role_salary',
          message: 'What is the salary for this role?',
        },
        {
          type: 'input',
          name: 'role_department',
          message: 'What department is this role?'
        },
      ])
      .then(res => {
        let role = {
          title: res.role_title,
          salary: res.role_salary,
          department: res.role_department,
        }
        fncs.addRole(role)
          .then(console.log(`Added ${role.title}`))
          .then(() => prompts());
      })
  }
  function resAddDepartment() {
    inquirer.prompt(
      [
        {
          type: 'input',
          name: 'department_name',
          message: 'What is the name of this department?'
        },
      ])
      .then(res => {
        let department = {
          name: res.department_name,
        }
        fncs.addDepartment(department)
          .then(console.log(`Added ${department.name}`))
          .then(() => prompts());
      })
  }
}

module.exports = { prompts }