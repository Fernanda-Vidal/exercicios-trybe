-- UPDATE

UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- SAFE UPDATES MODE (ou --i-am-a-dummy)

SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
-- sql_select_limit=1000: limita o conjunto de resultados 
-- SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT.

-- max_join_size=1.000.000: faz com que as instruções SELECT de várias
-- tabelas produzam um erro se o servidor estimar que deve examinar mais
-- de 1.000.000 combinações de linhas.

-- para desativar: rode o seguinte comando em uma janela de query dentro do MySQL Workbench sempre
-- que abri-lo
SET SQL_SAFE_UPDATES = 0;

-- Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;

UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;


-- UPDATA EM MASSA
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- UPDATA DE FORMA SEQUENCIAL
-- valores entre colchetes ([]) são opcionais

UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- PRA FIXAR
-- 1
SELECT * FROM sakila.actor
WHERE first_name = 'JULIA';

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.actor
WHERE first_name = 'JULES';

-- 2
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

-- 3
SELECT * FROM sakila.film;
UPDATE sakila.film
SET rental_rate = 25.00
WHERE length > 100 AND (rating <> 'R' OR rating <> 'NC-17');

-- 4
UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 1 AND 100 THEN 10.00
        WHEN length > 100 THEN 20
	END
);
SELECT * FROM sakila.film;

