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
                    case "VIEW_EMPLOYEES":
                        viewEmployees();
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

async function addEmployee() {
    const addname = await inquirer.prompt(askName());
    connection.query('SELECT role.id, role.title FROM role ORDER BY role.id;', async (err, res) => {
        if (err) throw err;
        const { role } = await inquirer.prompt([
            {
                name: 'role',
                type: 'list',
                choices: () => res.map(res => res.title),
                message: 'What is the employee role?: '
            }
        ]);
        let roleId;
        for (const row of res) {
            if (row.title === role) {
                roleId = row.id;
                continue;
            }
        }
        connection.query('SELECT * FROM employee', async (err, res) => {
            if (err) throw err;
            let choices = res.map(res => `${res.first_name} ${res.last_name}`);
            choices.push('none');
            let { manager } = await inquirer.prompt([
                {
                    name: 'manager',
                    type: 'list',
                    choices: choices,
                    message: 'Choose the employee Manager: '
                }
            ]);
            let managerId;
            let managerName;
            if (manager === 'none') {
                managerId = null;
            } else {
                for (const data of res) {
                    data.fullName = `${data.first_name} ${data.last_name}`;
                    if (data.fullName === manager) {
                        managerId = data.id;
                        managerName = data.fullName;
                        console.log(managerId);
                        console.log(managerName);
                        continue;
                    }
                }
            }
            console.log('Employee has been added. Please view all employee to verify...');
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: addname.first,
                    last_name: addname.last,
                    role_id: roleId,
                    manager_id: parseInt(managerId)
                },
                (err, res) => {
                    if (err) throw err;
                    prompt();

                }
            );
        });
    });

}

function askName() {
    return ([
        {
            name: "first",
            type: "input",
            message: "Enter the first name: "
        },
        {
            name: "last",
            type: "input",
            message: "Enter the last name: "
        }
    ]);
}

function updateEmployees() {
    db.getNewEmployee()
    .then(([rowes]) => {
        let id
    })
}