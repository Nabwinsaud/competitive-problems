-- Active: 1679773203281@@127.0.0.1@3306@hotel

CREATE TABLE
    categories(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(200),
        customer_id INT,
        FOREIGN KEY(customer_id) REFERENCES customer(id)
    );