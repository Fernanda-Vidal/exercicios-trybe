-- EXERCÍCIOS AULA

-- 1
SELECT customer_id,
AVG(DATEDIFF(return_date, rental_date))
FROM sakila.rental
GROUP BY customer_id;

-- 2
SELECT rating, MAX(length) AS max, MIN(length) AS min, AVG(length) AS média
FROM sakila.film 
GROUP BY rating;

-- 3
SELECT COUNT(city_id) AS quantidade
FROM sakila.address
GROUP BY city_id
ORDER BY quantidade DESC;

-- 4
SELECT YEAR(payment_date) AS year, MONTH(payment_date) AS month, SUM(amount) AS total
FROM sakila.payment
GROUP BY YEAR(payment_date), MONTH(payment_date)
ORDER BY month;

-- 5
SELECT amount, COUNT(amount)
FROM sakila.payment
GROUP BY amount
HAVING amount >= 1.99
ORDER BY amount;

-- 6
SELECT YEAR(payment_date) AS year, MONTH(payment_date) AS month, COUNT(amount) total
FROM sakila.payment
GROUP BY MONTH(payment_date),
YEAR(payment_date);
