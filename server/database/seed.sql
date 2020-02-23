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
   fabric_type VARCHAR,
   score INT
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

INSERT INTO fabrics (fabric_type, score) 
   VALUES   ('cotton', 1),
            ('polyester', 0),
            ('linen', 0),
            ('silk', 1),
            ('jersey', 0),
            ('lycra', 0),
            ('spandex' , 0),
            ('lace', 0),
            ('crepe', 0),
            ('velvet', 0),
            ('cotton-spandex', 0),
            ('polyester-cotton-rayon', 0),
            ('cotton-polyester', 0),
            ('polyester-spandex', 0);

INSERT INTO items (item_img, fabric_id, item_type, user_id, color)
   VALUES   ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',1, 'jeans', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',2, 'shirt', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',3, 'sweater', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',4, 'pants', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',5, 'shirt', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',6, 'shorts', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',7, 'cardigan', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',8, 'hat', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',9, 'jacket', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',10, 'sweats', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',11, 'jeans', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',12, 'hat', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',13, 'jeans', 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',14, 'jeans', 1, 'blue');
