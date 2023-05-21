-- Active: 1679773203281@@127.0.0.1@3306@nabinDb

CREATE TABLE
    customer(
        customer_id INT PRIMARY KEY,
        customer_email VARCHAR(255),
        customer_address VARCHAR(255)
    );

-- defining relation

-- with orders

-- table --

CREATE TABLE
    orders(
        order_id INT PRIMARY KEY,
        order_date DATETIME,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
    );

-- insert into the customer

-- table first --

INSERT INTO
    customer (
        customer_id,
        customer_email,
        customer_address
    )
VALUES (
        2,
        "rohitt@gmail.com",
        "Tikapur"
    ), (3, "ram@gmail.com", "Nepal");

-- get the customer from created above

SELECT * FROM customer;

-- add the table for customers

INSERT INTO
    orders (
        order_id,
        order_date,
        customer_id
    )
VALUES (2, "2023-05-18", 1), (3, "2023-05-19", 1);

-- get orders

SELECT * FROM orders;

-- get the order from customer using joins

--  for getting specific wise

SELECT
    customer.customer_id,
    customer.customer_address,
    customer.customer_email,
    orders.order_id,
    orders.order_date
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id;

-- for getting all

SELECT *
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id;

SELECT
    customer.customer_id,
    customer.customer_email,
    orders.order_id,
    orders.order_date
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id
WHERE customer.customer_id = 1
ORDER BY orders.order_date;

-- group by cases

-- use aggregate error does not work order by in this cases

SELECT
    customer.customer_address,
    customer.customer_id,
    customer.customer_email,
    MAX(orders.order_id) as orderID,
    MIN(orders.order_date) as orderDate
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id
GROUP BY customer.customer_id;

--  does not work group by should contains non aggregate column

SELECT
    customer.customer_address,
    MAX(customer.customer_id),
    customer.customer_email,
    orders.order_id as orderID,
    orders.order_date as orderDate
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id
GROUP BY customer.customer_id;

--  the above need to be fixed like this

-- this works while applying orders :)

SELECT
    customer.customer_address,
    MAX(customer.customer_id) as customerId,
    orders.order_id as orderID,
    orders.order_date as orderDate
FROM customer
    LEFT JOIN orders ON customer.customer_id = orders.customer_id
GROUP BY
    customer.customer_id,
    customer.customer_email,
    orders.order_date,
    orders.order_id;

-- right join accessing customers from orders reverse way not gonna use too much in real stuff :)

SELECT
    orders.order_id,
    orders.order_date,
    customer.customer_address,
    customer.customer_email,
    customer.customer_id
FROM orders
    RIGHT JOIN customer ON orders.customer_id = customer.customer_id;

-- inner join

SELECT
    customer.customer_id,
    customer.customer_address,
    customer.customer_email,
    orders.order_date,
    orders.order_id
FROM customer
    INNER JOIN orders ON customer.customer_id = orders.customer_id;

-- full join or full outer join

SELECT *
FROM customer c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
UNION
SELECT *
FROM customer c
    RIGHT JOIN orders ON c.customer_id = orders.order_id;