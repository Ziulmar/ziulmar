create database prueba01;
use Prueba 01;

create table personas (
    id int auto_increment PRIMARY KEY,
    name VARCHAR (150) NOT NULL,
    lastname VARCHAR (150) NOT NULL,
    age INT
);

SELECT * FROM personas;
