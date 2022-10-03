-- MANIPULAÇÃO DE STRING

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 2) FROM sakila.film WHERE film_id = 3;

-- PRA FIXAR 
-- 1
SELECT UCASE('trybe');

-- 2
SELECT REPLACE('Você já ouviu falar do DuckDuckGo', 'DuckDuckGo', 'Google');

-- 3
SELECT CHAR_LENGTH('Uma frase qualquer');

-- 4
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

-- 5
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');