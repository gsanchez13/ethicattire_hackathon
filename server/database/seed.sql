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

CREATE TABLE clothes (
   id SERIAL PRIMARY KEY,
   clothes_type VARCHAR
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   item_img VARCHAR,
   fabric_id INT REFERENCES fabrics (id),
   clothes_id INT REFERENCES clothes (id),
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
            ('spandex' , 0),
            ('cotton-spandex', 0),
            ('polyester-cotton-rayon', 0),
            ('cotton-polyester', 0),
            ('polyester-spandex', 0);

INSERT INTO clothes (clothes_type) 
   VALUES   ('t-shirts'),
            ('sweater'),
            ('button down'),
            ('jeans'),
            ('trousers'),
            ('blazer'),
            ('coat'),
            ('sneakers'),
            ('dress shoes');

INSERT INTO items (item_img, fabric_id, clothes_id, user_id, color)
   VALUES   ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',1, 4, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',2, 1, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',3, 2, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',4, 5, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',5, 1, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',6, 5, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',7, 6, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',8, 9, 1, 'blue'),
            ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',9, 7, 1, 'blue');
