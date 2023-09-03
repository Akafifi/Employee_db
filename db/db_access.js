const connection = require('./connection');

class Db_access {

    constructor(connection) {
        this.connection = connection;
    }

    getAllDepartments() {
        return this.connection.promise().query(
            'SELECT department.id, department.department_name FROM department;'

        );

    }
    getAllRoles() {
        return this.connection.promise().query(
            'SELECT role.id, role.title, role.salary, department_name FROM role LEFT JOIN department on role.department_id = department.id;'

        );

    }

   getAllEmployees() {
        // all ees: id, first name, last name, title, department, salary, manager
        return this.connection.promise().query(
            'SELECT * FROM employee;'
            // 'SELECT employee.id, employee.first_name, employee.last_name, role.id, manager.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON  role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;');
      )};

    
    getNewEmployee() {
        return this.connection.promise().query(
            'UPDATE employee
                SET name = 'Randy Moss'
                WHERE id = 9'
        )
    }
}

module.exports = new Db_access(connection);