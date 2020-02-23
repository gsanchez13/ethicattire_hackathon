DROP DATABASE IF EXISTS seed;

CREATE DATABASE seed;

\c seed

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR UNIQUE,
   password VARCHAR,
   style BOOLEAN
);

CREATE TABLE fabrics (
   id SERIAL PRIMARY KEY,
   fabric_type VARCHAR
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   item_img VARCHAR,
   fabric_id INT REFERENCES fabrics (id),
   item_type VARCHAR,
   user_id INT REFERENCES users (id),
   color VARCHAR
);


INSERT INTO users (username, password, style) 
   VALUES ('sharr', 'east', false);

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

INSERT INTO items (fabric_id, item_img, item_type, user_id, color)
   VALUES   (11,'https://pngimg.com/uploads/jeans/jeans_PNG5745.png', 'jeans', 1, 'blue');
            