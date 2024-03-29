-- JOINS

-- INNER JOIN 
--  pra fixar

-- 1
SELECT act.actor_id, act.first_name, film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS film
ON act.actor_id = film.actor_id;

-- 2
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;

-- 3
SELECT clt.customer_id, clt.first_name, clt.email, address.address_id, address.address
FROM sakila.customer clt
INNER JOIN sakila.address address
ON clt.address_id = address.address_id
ORDER BY clt.customer_id
LIMIT 100;

-- 4
SELECT clt.first_name, clt.email, clt.address_id, address.address, address.district
FROM sakila.customer clt
INNER JOIN sakila.address address
ON clt.address_id = address.address_id
WHERE address.district = 'California'
AND (clt.first_name LIKE '%rene%' OR clt.last_name LIKE '%rene%');

-- 5
SELECT clt.first_name,
COUNT(address.address) AS qtd
FROM sakila.customer AS clt
INNER JOIN sakila.address AS address
ON clt.address_id = address.address_id
WHERE clt.active = 1
GROUP BY clt.customer_id
ORDER BY first_name;

-- 6
SELECT func.first_name, func.last_name,
AVG(p.amount) AS media
FROM sakila.staff AS func
INNER JOIN sakila.payment AS p
ON func.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY func.first_name, func.last_name;

-- 7
SELECT act.actor_id, act.first_name, f_a.film_id , film.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f_a
INNER JOIN sakila.film AS film
ON act.actor_id = f_a.actor_id AND f_a.film_id = film.film_id;

-- OR

SELECT act.actor_id, act.first_name, f_a.film_id , film.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS f_a ON act.actor_id = f_a.actor_id
INNER JOIN sakila.film AS film ON f_a.film_id = film.film_id;

-- PRA FIXAR SELF JOIN

-- 1
SELECT
CONCAT(employee.first_name, ' ', employee.last_name) AS colaborador,
CONCAT(manager.first_name, ' ', employee.last_name) AS gerente
FROM hr.employees AS employee
INNER JOIN hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE employee.department_id <> manager.department_id;

-- 2
SELECT
manager.manager_id,
CONCAT(manager.first_name, ' ', manager.last_name) AS gerente,
COUNT(employee.employee_id)
FROM hr.employees AS manager
JOIN hr.employees AS employee ON manager.employee_id = employee.manager_id
GROUP BY manager.manager_id;

-- sem o JOIN -- 
SELECT manager_id,
CONCAT(first_name, ' ', last_name) AS gerente,
COUNT(employee_id)
FROM hr.employees
GROUP BY manager_id;

