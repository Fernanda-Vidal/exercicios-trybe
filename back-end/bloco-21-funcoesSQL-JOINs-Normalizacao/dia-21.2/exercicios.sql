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