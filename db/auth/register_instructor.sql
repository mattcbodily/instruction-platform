insert into users (
    first_name,
    last_name,
    email,
    password,
    instructor
) values (
    ${firstName},
    ${lastName},
    ${email},
    ${hash},
    true
)
returning user_id, first_name, last_name, email, instructor;