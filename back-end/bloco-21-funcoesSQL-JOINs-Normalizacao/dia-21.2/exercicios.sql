-- EXERCICIO 1
SELECT
movie.title, sales.domestic_sales, sales.international_sales
FROM pixar.box_office AS sales
INNER JOIN pixar.movies AS movie
	ON sales.movie_id = movie.id;
    
-- EXERCICIO 2
SELECT
movie.title,
sales.domestic_sales + sales.international_sales AS total
FROM pixar.box_office AS sales
INNER JOIN pixar.movies AS movie
	ON sales.movie_id = movie.id
WHERE sales.international_sales > sales.domestic_sales;

-- EXERCICIO 3
SELECT
mo.title, bo.rating AS nota
FROM pixar.movies AS mo
INNER JOIN pixar.box_office AS bo 
	ON mo.id = bo.movie_id
ORDER BY nota DESC;

-- EXERCICIO 4
SELECT
th.id,
th.name AS theater,
th.location,
mo.title
FROM pixar.theater AS th
	LEFT JOIN pixar.movies AS mo
		ON th.id = mo.theater_id
ORDER BY theater;

-- EXERCICIO 5
SELECT
mo.id,
mo.title, 
mo.director, 
mo.year, 
mo.length_minutes,
mo.theater_id,
th.name AS cinema
FROM pixar.theater AS th
	RIGHT JOIN pixar.movies AS mo
		ON mo.theater_id = th.id
ORDER BY cinema;

-- BÔNUS
SELECT
mo.id, 
mo.title,
mo.director,
mo.year,
mo.length_minutes,
mo.theater_id,
bo.rating
FROM pixar.movies AS mo
	INNER JOIN pixar.box_office AS bo
		ON mo.id = bo.movie_id
WHERE mo.theater_id IS NOT null AND bo.rating > 8;


