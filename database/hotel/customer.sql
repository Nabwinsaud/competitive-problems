-- Active: 1679773203281@@127.0.0.1@3306@hotel

CREATE TABLE
    customer(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(20),
        age INT,
        email VARCHAR(100)
    );

INSERT INTO
    customer (name, age, email)
VALUES ("John", 25, "john@example.com"), ("Emily", 30, "emily@gmail.com"), (
        "Michael",
        35,
        "michael@example.com"
    ), ("Sarah", 28, "sarah@gmail.com"), (
        "David",
        32,
        "david@example.com"
    );

DROP TABLE customer;

SELECT * FROM customer;

SELECT
    customer.id,
    customer.age,
    customer.name,
    orders.order_date,
    order_item.item_name,
    order_item.total_order
FROM customer
    LEFT JOIN orders ON customer.id = orders.customer_id
    LEFT JOIN order_item ON customer.id = order_item.customer_id;