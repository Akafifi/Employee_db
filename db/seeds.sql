INSERT INTO department(dep_name) VALUES
    ('Management'),
    ('Sales'),
    ('Human Resources'),
    ('Accounting');

INSERT INTO role(title, salary, department_id) VALUES
    ('CEO', 400000, 1),
    ('VP', 250000, 1),
    ('Sales Director', 110000, 2),
    ('Saleswoman', 70000, 2),
    ('Senior Accountant', 90000, 4),
    ('Accountant', 60000, 4),
    ('HR Associate', 55000, 3)
    ('HR Assistant', 45000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
    ('Bart', 'Starr', 1, null),
    ('Michael', 'Redd', 1),
    ('Oscar', 'Robertson', 3),
    ('Sidney', 'Moncrief', 4),
    ('Jacqueline', 'James', 2,),
    ('Jamarr', 'Chase', 4),
    ('London', 'Lars', 2),
    ('Hidalgo', 'Hughes', 3);

