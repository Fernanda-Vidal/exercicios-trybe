USE normalization;

CREATE TABLE funcionarios(
	funcionario_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL, 
    email VARCHAR(50) UNIQUE,
    telefone VARCHAR(50) NOT NULL, 
    data_cadastro DATE,
    CONSTRAINT PRIMARY KEY(funcionario_id)
    );
    
CREATE TABLE setor(
	setor_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_setor VARCHAR(50) NOT NULL
    );
    
CREATE TABLE setor_func(
	setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (setor_id, funcionario_id), 
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id),
    FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id)
    );
    
INSERT INTO funcionarios(nome, sobrenome, email, telefone, data_cadastro)
VALUES('JOSEPH', 'RODRIGUES', 'JO@GMAIL.COM', '(35)99855-1445', '2020-05-05'),
	('ANDRÉ', 'FREEMAN', 'ANDRE1990@GMAIL.COM', '(47)99522-4996', '2020-02-05'), 
    ('CINTIA', 'DUVAL', 'CINDY@OUTLOOK.COM', '(33)99855-4669', '2020-05-05'),
    ('FERNANDA', 'MENDES', 'FERNANDAMENDES@YAHOO.COM', '(33)99200-1556', '2020-05-05');
    
SELECT * FROM funcionarios;

INSERT INTO setor(name_setor)
VALUES ('administração'),
	('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');
    
    SELECT * FROM setor;
