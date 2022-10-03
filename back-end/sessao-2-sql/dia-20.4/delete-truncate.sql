--  DELETE

DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- Meu DELETE não foi permitido...

-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;

-- TRUNCATE
-- A função principal e única do TRUNCATE é de limpar (excluir todos os registros) de uma tabela,
-- não sendo possível especificar o WHERE. Por isso, o TRUNCATE só pode ser usado nesse cenário.

TRUNCATE banco_de_dados.tabela;

-- pra fixar
-- 1
SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- 2
SET SQL_SAFE_UPDATES = 0;
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM sakila.film_text
WHERE title LIKE '%saga%' OR description LIKE '%saga%';

-- 4
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;

