-- Active: 1679773203281@@127.0.0.1@3306@nabinDb

CREATE TABLE
    user(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(20),
        last_name VARCHAR(20),
        email VARCHAR(100),
        phone VARCHAR(20),
        address VARCHAR(100)
    );

INSERT INTO
    user (
        id,
        first_name,
        last_name,
        email,
        phone,
        address
    )
VALUES (
        1,
        'John',
        'Doe',
        'johndoe@example.com',
        '555-1234',
        '123 Main St'
    ), (
        2,
        'Jane',
        'Smith',
        'janesmith@example.com',
        '555-5678',
        '456 Elm St'
    ), (
        3,
        'David',
        'Johnson',
        'davidjohnson@example.com',
        '555-9876',
        '789 Oak St'
    ), (
        4,
        'Sarah',
        'Williams',
        'sarahwilliams@example.com',
        '555-4321',
        '321 Pine St'
    ), (
        5,
        'Michael',
        'Brown',
        'michaelbrown@example.com',
        '555-8765',
        '567 Maple Ave'
    ), (
        6,
        'Emily',
        'Jones',
        'emilyjones@example.com',
        '555-2345',
        '890 Cedar Rd'
    ), (
        7,
        'Robert',
        'Davis',
        'robertdavis@example.com',
        '555-6543',
        '432 Oak St'
    ), (
        8,
        'Olivia',
        'Miller',
        'oliviamiller@example.com',
        '555-3456',
        '765 Elm St'
    ), (
        9,
        'Daniel',
        'Taylor',
        'danieltaylor@example.com',
        '555-9876',
        '987 Maple Ave'
    ), (
        10,
        'Sophia',
        'Wilson',
        'sophiawilson@example.com',
        '555-8765',
        '678 Cedar Rd'
    ), (
        11,
        'Matthew',
        'Anderson',
        'matthewanderson@example.com',
        '555-2345',
        '901 Oak St'
    ), (
        12,
        'Ava',
        'Thomas',
        'avathomas@example.com',
        '555-6543',
        '543 Elm St'
    ), (
        13,
        'James',
        'Robinson',
        'jamesrobinson@example.com',
        '555-3456',
        '876 Maple Ave'
    ), (
        14,
        'Isabella',
        'Lee',
        'isabellalee@example.com',
        '555-7890',
        '210 Cedar Rd'
    ), (
        15,
        'Joseph',
        'Harris',
        'josephharris@example.com',
        '555-0987',
        '789 Oak St'
    ), (
        16,
        'Mia',
        'Clark',
        'miaclark@example.com',
        '555-4321',
        '321 Pine St'
    ), (
        17,
        'Benjamin',
        'Lewis',
        'benjaminlewis@example.com',
        '555-2345',
        '567 Maple Ave'
    ), (
        18,
        'Charlotte',
        'Young',
        'charlotteyoung@example.com',
        '555-8765',
        '890 Cedar Rd'
    ), (
        19,
        'Daniel',
        'Walker',
        'danielwalker@example.com',
        '555-3456',
        '432 Oak St'
    ), (
        20,
        'Chloe',
        'Hall',
        'chloehall@example.com',
        '555-7890',
        '765 Elm St'
    );