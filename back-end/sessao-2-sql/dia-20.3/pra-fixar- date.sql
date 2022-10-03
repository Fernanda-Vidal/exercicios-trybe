-- DATA E TEMPO
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-3%'
ORDER BY payment_date;

SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:51';

SELECT * FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59'
ORDER BY payment_date;

SELECT DATE(payment_date) FROM sakila.payment;
SELECT YEAR(payment_date) FROM sakila.payment;
SELECT MONTH(payment_date) FROM sakila.payment;
SELECT DAY(payment_date) FROM sakila.payment;
SELECT HOUR(payment_date) FROM sakila.payment;
SELECT MINUTE(payment_date) FROM sakila.payment;
SELECT SECOND(payment_date) FROM sakila.payment;

-- PRA FIXAR

-- 1
SELECT COUNT(*) pagamentos FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

-- 2
SELECT COUNT(*) pagamentos FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

-- 3
SELECT
DATE(rental_date) data,
YEAR(rental_date) ano,
MONTH(rental_date) mes,
DAY(rental_date) dia,
HOUR(rental_date) hora,
MINUTE(rental_date) minuto FROM sakila.rental
WHERE rental_id = 10330;

-- 4
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22
ORDER BY payment_date;