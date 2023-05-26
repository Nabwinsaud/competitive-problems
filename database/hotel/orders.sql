-- Active: 1679773203281@@127.0.0.1@3306@hotel

CREATE TABLE
    orders(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        order_date DATETIME,
        customer_id INT,
        FOREIGN KEY (customer_id) REFERENCES customer(id)
    );

ALTER TABLE
    orders MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT PRIMARY KEY;

ALTER TABLE orders DROP PRIMARY KEY;

INSERT INTO
    orders(order_date, customer_id)
VALUES('2023-05-30', 2);

SELECT * FROM orders;

SELECT
    orders.id,
    orders.order_date,
    order_item.id as order_id,
    order_item.item_name,
    order_item.total_order
FROM orders
    JOIN order_item ON orders.id = order_item.order_id;