create database paginations;

use paginations;

create table if not exists ListForPaginations (
	id int primary key auto_increment,
    title varchar(100) not null,
    summary text(25000)
);

insert into ListForPaginations (title, summary) values
("Title 1", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 2", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 3", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 4", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 5", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 6", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 7", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 8", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 9", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 10", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 11", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 12", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 12", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 14", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 15", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 16", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 17", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 18", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 19", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 20", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 21", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 22", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 23", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 24", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 25", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 26", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 27", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 28", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 29", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 30", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 31", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 32", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 33", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 34", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 35", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 36", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 37", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 38", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 39", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 40", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 41", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 42", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 43", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),
("Title 44", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.");

select * from ListForPaginations;

select * from ListForPaginations order by id desc LIMIT 2,10;