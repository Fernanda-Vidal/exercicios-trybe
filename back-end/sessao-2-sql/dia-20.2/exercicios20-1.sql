-- 1
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';

-- 2
SELECT 1, 2, 3;

-- 3
SELECT 10 + 15;

-- 4
SELECT (2 * 5) - 2;

-- 5
SELECT * FROM Scientists.Scientists;

-- 6
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Scientists.Projects;

-- 7
SELECT name FROM Scientists.Scientists
ORDER BY name ASC;

-- 8
SELECT name FROM Scientists.Projects
ORDER BY name DESC;

-- 9
SELECT * FROM Scientists.Projects;
SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' para ser concluído') as info FROM Scientists.Projects;

-- 10
SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 3;

-- 11
SELECT DISTINCT project FROM Scientists.AssignedTo;

-- 12
SELECT name FROM Scientists.Projects
ORDER BY hours DESC LIMIT 1;

-- 13
SELECT name FROM Scientists.Projects
ORDER BY hours LIMIT 1 OFFSET 1;

-- 14
SELECT name FROM Scientists.Projects
ORDER BY hours ASC LIMIT 5;

-- 15
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS info FROM Scientists.Scientists;