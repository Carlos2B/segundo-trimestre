CREATE TABLE leitor(
	id_leitor serial primary key,
	nome varchar(100),
	matricula varchar(20),
	telefone varchar(20),
	endereco varchar(100),
	tipo varchar(50)
);
create table livro(
	isbn varchar(13) primary key,
	titulo varchar(100),
	autor varchar(100),
	assunto varchar(50),
	editora varchar(50)
);

create table exemplar(
	id_exemplar serial primary key,
	isbn_livro varchar(13),
	estante int,
	prateleira int,
	disponibilidade boolean,
	foreign key (isbn_livro) references livro(isbn)
);
create table emprestimo(
	id serial primary key,
	id_livro varchar(13),
	id_leitor int,
	data_emprestimo date,
	data_devolucao date,
	foreign key (id_livro) references livro(isbn),
	foreign key (id_leitor) references leitor(id_leitor)
)
