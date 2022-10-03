-- PRA FIXAR:
-- 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2
SELECT CONCAT(first_name, last_name) AS name FROM sakila.customer
WHERE active <> 1 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;

-- 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- 4
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.customer
WHERE store_id = 1 AND active = 1;

-- 5
SELECT * FROM sakila.customer
WHERE store_id = 1 AND active = 0;

-- 6
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
