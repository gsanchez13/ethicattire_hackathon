DROP DATABASE IF EXISTS seed;

CREATE DATABASE seed;

\c seed

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR UNIQUE,
   password VARCHAR,
   style BOOLEAN
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   fabric_id INT REFERENCES fabrics (id),
   item_type VARCHAR,
   user_id INT REFERENCES users (id),
   color VARCHAR
);

CREATE TABLE fabrics (
   id SERIAL PRIMARY KEY,
   fabric_type VARCHAR
);

INSERT INTO users (username, password, style) 
   VALUES ('sharr', 'east', 0);

INSERT INTO fabrics (fabric_type) 
   VALUES   ('cotton'),
            ('polyester'),
            ('linen'),
            ('silk'),
            ('jersey'),
            ('lycra'),
            ('spandex'),
            ('lace'),
            ('crepe'),
            ('velvet'),
            ('cotton-spandex'),
            ('polyester-cotton-rayon'),
            ('cotton-polyester'),
            ('polyester-spandex');

INSERT INTO items (fabric_id, item_type, user_id, color)
   VALUES   (11, 'jeans', 1, 'blue');
            