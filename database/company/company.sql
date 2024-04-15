-- Active: 1679773203281@@127.0.0.1@3306@nabinDb

--

CREATE TABLE IF NOT EXISTS Company (
    id int not null PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) not null
);

CREATE TABLE IF NOT EXISTS department (
    id int not null PRIMARY key AUTO_INCREMENT, name VARCHAR(200) not null
);

CREATE TABLE IF NOT EXISTS manager (
    id int not null PRIMARY key AUTO_INCREMENT, name VARCHAR(100) not null
)

Alter table `Company` add COLUMN department_id int;

ALTER TABLE `Company`
Add FOREIGN key (department_id) REFERENCES department (id);

DESC Company

ALTER TABle `Company` add column manager_id int;

ALTER TABLE `Company`
add foreign key (manager_id) references manager (id);

insert into manager (name) values ("Alex"), ("Bill");

select * from manager

insert into
    department (name)
VALUES ("IT"),
    ("Engineering"),
    ("Business & Sales"),
    ("HR"),
    ("Marketing");

select * from department;

select * from `Company`;

ALTER TABLE `Company` ADD COLUMN salary int not null;

insert into
    `Company` (
        name, department_id, manager_id, salary
    )
VALUES ("kalidash", 2, 1, 60000) ("Rita", 2, null, 70000),
    ("Ramit", 2, null, 80000)

;

select *
from `Company` c
    inner JOIN department on c.department_id = department.id
WHERE
    c.department_id = department.id;

select * from `Company` c order by salary DESC LIMIT 1 OFFSET 2;

select *
from department d
    inner join `Company` c on d.id = c.department_id
where
    d.id = c.department_id

select c.id, c.name, d.name as department_name, c.salary, c.manager_id
from `Company` c
    LEFT JOIN department d on c.department_id = d.id
WHERE
    manager_id is not null
ORDER BY salary DESC
LIMIT 1
OFFSET
    2;

-- get the third highest salary from company where department should not be null

SELECT
    c.id,
    c.name as employee_name,
    c.salary,
    m.name as manager,
    CASE
        WHEN manager_id IS NOT NULL THEN manager_id
        ELSE 'Manager does not exist'
    END AS managerName
FROM
    `Company` c
    LEFT JOIN department d on c.department_id = d.id
    LEFT JOIN manager m on c.manager_id = m.id
ORDER BY salary DESC
LIMIT 1
OFFSET
    2;

--     Write a query to get the names of all employees in a specific department.
SELECT c.name, d.name as department_name
from `Company` c
    LEFT JOIN department d on c.department_id = d.id
WHERE
    d.name = "IT"
ORDER BY c.name ASC;

-- Write a query to find all departments that have employees with a salary greater than a certain amount.
SELECT *
FROM department d
    LEFT JOIN `Company` c on d.id = c.department_id
WHERE
    c.salary > 40000;

-- Write a query to find all employees managed by a specific manager.

-- for managing the employees by specific manager then either it will show all manager matching with employees

-- or need to query by where clause
SELECT *
FROM `Company` c
    inner join manager m on c.manager_id = m.id;
-- WHERE
--     c.manager_id = 1

-- Advanced querying:
--

-- Write a query to find the average salary in each department.

SELECT
    AVG(c.salary) as average_salary_of_each_department
FROM `Company` c
GROUP BY
    c.department_id

SELECT SUM(c.salary), c.department_id
FROM `Company` c
    -- WHERE
    --     c.salary > 40000
GROUP BY
    -- c.salary,
    c.department_id
HAVING
    SUM(c.salary) > 40000;

-- Write a query to find the top 3 employees with the highest salaries across all departments.

SELECT c.name, c.salary, d.name as department_name
from `Company` c
    LEFT join department d on c.department_id = d.id
ORDER BY c.salary DESC
LIMIT 3;

-- Write a query to find employees who don't have a manager assigned.

SELECT
    c.id,
    c.name as employee_not_assigned_with_manager
FROM `Company` c
    left join manager m on c.manager_id = m.id
where
    c.manager_id IS NULL