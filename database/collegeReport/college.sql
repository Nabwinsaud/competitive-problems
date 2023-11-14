-- Active: 1694532789530@@127.0.0.1@3306@college

CREATE TABLE
    products (
        product_name varchar(50) NOT NULL,
        price decimal(5, 2) NOT NULL,
        description varchar(255)
    );

CREATE TABLE
    customers (
        name varchar(50) NOT NULL,
        address varchar(255),
        phone_number varchar(15)
    );

CREATE TABLE
    orders (
        order_date date NOT NULL,
        customer_id int NOT NULL,
        product_id int NOT NULL,
        quantity int NOT NULL
    );

INSERT INTO
    products (
        product_name,
        price,
        description
    )
VALUES (
        'Apples',
        1.99,
        'A delicious and nutritious fruit.'
    );

INSERT INTO
    products (
        product_name,
        price,
        description
    )
VALUES (
        'Oranges',
        1.50,
        'A citrus fruit that is a good source of vitamin C.'
    );

INSERT INTO
    products (
        product_name,
        price,
        description
    )
VALUES (
        'Bananas',
        0.99,
        'A sweet and creamy fruit that is a good source of potassium.'
    );

INSERT INTO
    customers (name, address, phone_number)
VALUES (
        'John Doe',
        '123 Main Street',
        '123-456-7890'
    );

INSERT INTO
    customers (name, address, phone_number)
VALUES (
        'Jane Doe',
        '456 Elm Street',
        '987-654-3210'
    );

INSERT INTO
    orders (
        order_date,
        customer_id,
        product_id,
        quantity
    )
VALUES ('2023-09-12', 1, 1, 3);

INSERT INTO
    orders (
        order_date,
        customer_id,
        product_id,
        quantity
    )
VALUES ('2023-09-13', 2, 2, 2);

SELECT * FROM customers;

CREATE TABLE
    student (
        sid INT PRIMARY KEY CHECK (sid >= 100),
        name VARCHAR(255),
        address VARCHAR(255),
        phone_number VARCHAR(255)
    );

DESCRIBE student;

RENAME TABLE customer TO customers;

SHOW TABLES;

CREATE TABLE
    employee (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        address varchar(255),
        phone_number varchar(15) NOT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO
    employee (name, address, phone_number)
VALUES (
        'shyam',
        'Kathmandu',
        '123-456-7890'
    ), (
        'ram',
        'Pokhara',
        '987-654-3210'
    );

ALTER TABLE employee ADD COLUMN salary int ;

ALTER TABLE employee ADD COLUMN city varchar(255) AFTER address;

UPDATE employee SET salary =9000000 where id=2;

SELECT name
FROM employee
WHERE salary > (
        SELECT AVG(salary)
        FROM employee
    );

INSERT INTO
    student (
        sid,
        name,
        address,
        phone_number
    )
VALUES (
        101,
        'Nabin Saud',
        'Kathmandu, Nepal',
        '123-456-7890'
    ), (
        102,
        'Ram Sharma',
        'Lalitpur, Nepal',
        '987-654-3210'
    ), (
        103,
        'Shyam Pradhan',
        'Bhaktapur, Nepal',
        '555-123-4567'
    ), (
        104,
        'Hari Thapa',
        'Chitwan, Nepal',
        '777-888-9999'
    ), (
        105,
        'Gita Bhandari',
        'Kailali, Nepal',
        '444-222-3333'
    );

CREATE TABLE
    department (
        id INT PRIMARY KEY,
        name VARCHAR(255),
        sid INT,
        FOREIGN KEY (sid) REFERENCES student (sid),
    );

INSERT INTO
    department (id, name, sid)
VALUES (3, 'IT Department', 201), (4, 'Computer Science', 501);

SELECT * FROM employee;

UPDATE employee SET salary = salary * 0.01 WHERE salary > 9000;

UPDATE employee SET city = 'Bhaktapur' WHERE id = 3;

UPDATE employee SET city = "'Kathmandu'" where id = 103;

UPDATE employee SET department_id = 501 WHERE department_id = 201;

SELECT * FROM employee WHERE salary > 50000;

SELECT * FROM employee WHERE city = 'Kathmandu';

SELECT * FROM employee WHERE city = 'KTM' AND salary < 20000;

SELECT name FROM employee WHERE name LIKE 'M%n';

SELECT AVG(salary) FROM employee;

SELECT COUNT(*) FROM employee WHERE city = 'Kathmandu';

SELECT SUM(salary) FROM employee;

--  eid INT,

--         FOREIGN KEY (eid) REFERENCES employee (id)

ALTER TABLE department ADD COLUMN eid INT;

ALTER TABLE department
ADD
    CONSTRAINT fk_employee FOREIGN KEY (eid) REFERENCES employee (id);

select * from employee;

SELECT
    employee.name,
    department.name as department_name
FROM employee
    NATURAL JOIN department;

select * from department 

SELECT customers.name FROM customers 

CREATE USER saud@localhost IDENTIFIED BY '123@xyz';

ALTER USER saud@localhost IDENTIFIED BY '123';

GRANT ALL PRIVILEGES ON *.* TO saud@localhost;