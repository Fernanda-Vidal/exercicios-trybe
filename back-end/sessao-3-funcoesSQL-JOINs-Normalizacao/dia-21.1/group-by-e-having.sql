-- GROUP BY

SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- PRA FIXAR

-- 1
SELECT active, COUNT(active) FROM sakila.customer GROUP BY active;

-- 2
SELECT store_id AS loja,
IF (active = 1, 'ativo', 'inativo') AS situação,
COUNT(*) AS quantidade FROM sakila.customer GROUP BY active, store_id;

-- 3
SELECT rating, AVG(rental_duration) AS `duração média de locação`
FROM sakila.film
GROUP BY rating
ORDER BY `duração média de locação` DESC;

-- 4
SELECT district, COUNT(district) AS quantidade
FROM sakila.address
GROUP BY district
ORDER BY quantidade DESC;

-- HAVING
-- 	pra fixar 

-- 1 
SELECT rating, AVG(length) media
FROM sakila.film
GROUP BY rating
HAVING media BETWEEN 115.0 AND 121.50
ORDER BY media DESC;
    
-- 2
SELECT rating, SUM(replacement_cost) AS replacement_all
FROM sakila.film
GROUP by rating
HAVING replacement_all > 3950.50
ORDER BY replacement_all;