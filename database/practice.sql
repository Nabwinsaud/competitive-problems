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