DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dep_name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE KEY (dep_name);
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id),
    REFERENCES role(id);
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT REFERENCES employee(id),

    PRIMARY KEY (id),
    FOREIGN KEY (role_id),
    REFERENCES role(id);
);