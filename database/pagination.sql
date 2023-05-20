-- Active: 1679773203281@@127.0.0.1@3306@nabinDb

SELECT *
FROM user
ORDER BY
    first_name,
    last_name
LIMIT 10
OFFSET 10;

-- 1-10 data executed

SELECT * FROM user WHERE id > 10 ORDER BY id LIMIT 5;

SELECT * FROM user ORDER BY first_name;

SELECT
    first_name,
    COUNT(*) as count
FROM user
WHERE first_name LIKE "%Av%"
GROUP BY first_name
ORDER BY first_name