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
    ${instructor}
)
returning user_id, first_name, last_name, email, instructor;