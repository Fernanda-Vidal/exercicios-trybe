CREATE DATABASE IF NOT EXISTS albuns;
USE albuns;

CREATE TABLE estilo(
		album_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        titulo VARCHAR(50) NOT NULL
);
    
ALTER TABLE estilo
RENAME COLUMN album_id TO estilo_id;

CREATE TABLE artista(
		artista_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome_artista VARCHAR(50) NOT NULL
        );
        
CREATE TABLE album(
		album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        titulo VARCHAR(50) NOT NULL,
        artista_id INT NOT NULL,
        estilo_id INT NOT NULL,
        FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
        FOREIGN KEY (estilo_id) REFERENCES estilo(estilo_id)
        );
        
ALTER TABLE album ADD preco DECIMAL NOT NULL;
        
CREATE TABLE cancao(
		cancao_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome_cancao VARCHAR (50) NOT NULL,
        album_id INT NOT NULL,
        FOREIGN KEY (album_id) REFERENCES album(album_id)
        );
