-- PRA FIXAR ## IN

SELECT * FROM sakila.payment
WHERE customer_id IN ('269', '239', '126', '399', 142);

SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

-- PRA FIXAR ## BETWEEN

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

SELECT * FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- 1
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

-- 2
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 AND 176;

-- 3
SELECT COUNT(*) FROM sakila.rental
WHERE rental_date BETWEEN '2005-05-01' AND '2005-08-01';

-- 4
SELECT * FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

-- 5
SELECT * FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title;