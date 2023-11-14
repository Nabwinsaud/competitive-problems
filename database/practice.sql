-- Active: 1679773203281@@127.0.0.1@3306@nabinDb

--

SELECT * FROM customer;

-- add the table for customers

CREATE TABLE
    post(
        id INT PRIMARY KEY,
        title VARCHAR(256),
        description VARCHAR(256)
    );

INSERT INTO
    post (id, title, description)
VALUES (
        1,
        'Introduction to Python',
        'A beginner-friendly guide to Python programming language.'
    ), (
        2,
        'Mastering JavaScript',
        'In-depth tutorials and examples for JavaScript enthusiasts.'
    ), (
        3,
        'The Power of Java',
        'Exploring the features and capabilities of the Java programming language.'
    ), (
        4,
        'Deep Dive into C++',
        'Advanced concepts and techniques in C++ programming.'
    ), (
        5,
        'Demystifying Ruby',
        'Unraveling the elegance and simplicity of the Ruby programming language.'
    );

SELECT * FROM post;

-- create a category table to link relationship with post;

CREATE TABLE
    post_category(
        category_id INT PRIMARY KEY,
        category VARCHAR(256),
        id INT,
        FOREIGN KEY(id) REFERENCES post(id)
    );

CREATE TABLE
    post_category1(
        category_id INT PRIMARY KEY,
        category VARCHAR(256),
        post_id INT,
        FOREIGN KEY(post_id) REFERENCES post(id)
    );

-- use join to get post

SELECT
    post.description de,
    post.id,
    post.title t
FROM post
    LEFT JOIN post_category ON post.id = post_category.id;

-- using right join if not created

SELECT
    post.description de,
    post.id,
    post.title t
FROM post
    RIGHT JOIN post_category ON post.id = post_category.id;

-- Create the Employees table

CREATE TABLE
    Employees (
        EmployeeID INT PRIMARY KEY,
        FirstName VARCHAR(50),
        LastName VARCHAR(50),
        Age INT,
        Department VARCHAR(50),
        Salary FLOAT
    );

-- Insert dummy data

INSERT INTO
    Employees (
        EmployeeID,
        FirstName,
        LastName,
        Age,
        Department,
        Salary
    )
VALUES (
        1,
        'John',
        'Doe',
        28,
        'Sales',
        55000.00
    ), (
        2,
        'Jane',
        'Smith',
        32,
        'IT',
        65000.00
    ), (
        3,
        'Robert',
        'Johnson',
        22,
        'HR',
        48000.00
    ), (
        4,
        'Emily',
        'Brown',
        40,
        'IT',
        72000.00
    ), (
        5,
        'David',
        'Lee',
        30,
        'Sales',
        60000.00
    ), (
        6,
        'Sophia',
        'Wilson',
        35,
        'HR',
        52000.00
    );

SELECT *
FROM Employees
WHERE
    Department = 'HR'
    AND Salary > 50000
    AND Age <= 40;