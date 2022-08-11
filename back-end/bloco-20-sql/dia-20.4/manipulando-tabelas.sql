-- MANIPULANDO TABELAS

-- INSERT
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

INSERT INTO tabelaA (coluna1, coluna2)
    SELECT tabelaB.coluna1, tabelaB.coluna2
    FROM tabelaB
    WHERE tabelaB.nome_da_coluna <> 'algumValor'
    ORDER BY tabelaB.coluna_de_ordenacao;
    
-- pra fixar 
-- 1
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Bilbo', 'Bolseiro', 1, 1, 1, 'Hobbit');

-- 2
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Gandalf', 'O Cinzento', 1, 1, 1, 'Mago'),
('Torin', 'Escudo de Carvalho', 1, 1, 1, 'Anão');

SELECT * FROM sakila.staff;

-- 3
INSERT INTO sakila.actor (first_name, last_name)
SELECT sakila.customer.first_name, sakila.customer.last_name
FROM sakila.customer LIMIT 5;

SELECT * FROM sakila.actor;

-- 4
INSERT INTO sakila.category (name)
VALUES ('Bored'), ('Distopya'), ('Utopia');
SELECT * FROM sakila.category;

-- 5
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3,3);
SELECT * FROM sakila.store;