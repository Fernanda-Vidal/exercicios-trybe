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
    

