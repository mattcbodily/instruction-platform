create table if not exists users (
    user_id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(150) not null,
    password varchar(250) not null,
    instructor boolean not null
);