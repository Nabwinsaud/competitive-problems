-- Active: 1679773203281@@127.0.0.1@3306@hotel

CREATE TABLE
    order_item(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        total_order INT,
        item_name VARCHAR(100),
        customer_id INT,
        order_id INT,
        FOREIGN KEY(customer_id) REFERENCES customer(id),
        FOREIGN KEY (order_id) REFERENCES orders(id)
    );

INSERT INTO
    order_item(
        total_order,
        item_name,
        customer_id,
        order_id
    )
VALUES (2, "Milk", 1, 1), (20, "Samosa", 1, 1), (6, "Chowmein", 1, 1);

SELECT * FROM order_item;