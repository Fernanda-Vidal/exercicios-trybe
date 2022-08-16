CREATE DATABASE IF NOT EXISTS ZOO;
USE ZOO;

CREATE TABLE especies(
	especie_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_especie VARCHAR(50) NOT NULL, 
    localizacao VARCHAR(50) NOT NULL
    );
    
CREATE TABLE gerente(
	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
    );
    
CREATE TABLE cuidadores(
	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
    );
    
CREATE TABLE animais(
	animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_animal VARCHAR(50) NOT NULL,
    especie_id INT NOT NULL, 
    sexo VARCHAR(10) NOT NULL, 
    idade INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especies(especie_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
    );

CREATE TABLE animal_cuidador(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    PRIMARY KEY (animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
    );
    