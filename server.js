const db = require('./db/db_access')
const { prompt } = require('inquirer')

init();

function init() {
    mainMenu();
}

function mainMenu() {
    prompt([
        {
        type: 'list',
        name: 'userChoice',
        message: 'Choose your action:',
        choices: [
            {
                name: 'view all departments',
                value: 'VIEW_DEPARTMENTS'
            },
            {
                name: 'view all roles',
                value: 'VIEW_ROLES'
            },
            {
                name: 'view all employees',
                value: 'VIEW_EMPLOYEES'
            },
            {
                name:'quit',
                value: 'QUIT'
            }
        ]
        }
    
    ]).then(answer => {
        let choice = answer.userChoice;

        switch(choice) {
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
                case "VIEW_ROLES":
                    viewRoles();
                    break;
                default:
                    process.exit();
        }
    })
}

function viewDepartments() {
    db.getAllDepartments()
    .then(([rowes]) => {
        let departments = rowes;
        console.log('\n');
        console.table(departments);
    })
    .then(() => {
        mainMenu();
    });
}


function viewRoles() {
    db.getAllRoles()
    .then(([rowes]) => {
        let roles = rowes;
        console.log('\n');
        console.table(roles);
    })
    .then(() => {
        mainMenu();
    });
}

function viewEmployees() {
    db.getAllEmployees()
    .then(([rowes]) => {
        let employees = rowes;
        console.log('\n');
        console.table(employees);
    })
    .then(() => {
        mainMenu();
    });
}