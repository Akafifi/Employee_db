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
}

module.exports = new Db_access(connection);