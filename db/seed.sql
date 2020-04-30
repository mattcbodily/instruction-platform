create table if not exists users (
    user_id serial primary key,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(150) not null,
    password varchar(250) not null,
    instructor boolean not null
);

create table if not exists subscription_plans (
    plan_id serial primary key,
    price decimal not null
);

create table if not exists user_subscription_join (
    join_id serial primary key,
    user_id int references users(user_id),
    plan_id int references subscription_plans(plan_id)
);