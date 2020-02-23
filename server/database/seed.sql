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
<<<<<<< HEAD
   fabric_desc VARCHAR
=======
   score INT
);

CREATE TABLE clothes (
   id SERIAL PRIMARY KEY,
   clothes_type VARCHAR
>>>>>>> e44383d0cde498618f02eb72545c05ead7a03c5c
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

<<<<<<< HEAD
INSERT INTO fabrics (fabric_type, fabric_desc) 
   VALUES   ('cotton','Cotton is one of the most commonly used fabrics. This 
                     natural fibre is light and breathable but 
                     growing cotton can be problematic: conventional cotton is one of the thirstiest 
                     and most chemical-intensive crops to grow. It requires a lot of pesticides and, 
                     as a result, has a negative impact on the planet, and the people who grow it. 
                     Organic cotton, a more sustainable alternative to conventional cotton. It aims to lower the environmental 
                     impact by trying to remove harmful pesticides and other chemicals from the production process. 
                     If you’re looking for the most sustainable cotton, recycled cotton is the way to go. Recycled or 
                     upcycled cotton is made using post-industrial and post-consumer cotton waste. 
                     Recycled cotton has the potential to help reduce water and energy consumption, as well as help keep cotton 
                     clothes out of landfill.'),
            ('hemp','Hemp is gaining popularity. Marijuana’s ‘sober cousin’ is extremely 
                        versatile: it’s used as a food, a building material, in cosmetics, and is one of the oldest fibres in the world,
                        used for hundreds of years as a fabric. The great thing about hemp is that it’s grown all around the
                        world and it requires very little water, no pesticides, and naturally fertilises the soil it grows 
                        in – making it much better for the environment than other crops.
                        Hemp helps keep you warm in winter and cool in summer, and gets softer the more you wash it. For all these reasons, we also consider hemp one of the most 
                        sustainable fabrics out there.'),
            ('polyester','Polyester is a man-made fiber that is synthesized from petroleum-based products. Polyester cloth was invented in 1941, so 
                        comparing to cotton, this fabric is a fairly new player in the game. The majority of polyesters are not biodegradable meaning 
                        that the polyester fabric shirt you bought last season will not decompose for 20 years at best and 200 years at worst, depending 
                        on conditions.
                        The main issue regarding synthetic fabrics, such as polyester, is that they don’t breathe. Some find, when wearing it, that they can 
                        feel sweaty or have a feeling of humidity, which can be uncomfortable. However, modern manufacturing is now starting to create 
                        more moisture-wicking polyesters, which are great for work out and leisurewear.
                        People with very sensitive skin might find that they get a small reaction to wearing synthetic fabrics, however, this is usually not as 
                        common when it is a blended fabric.  On its own, it is highly flammable, so care needs to be taken, especially if wearing or 
                        using 100% polyester near an open flame.
                        As polyester is made from plastic, there is the question as to whether it is bad for the environment. 
                        True, it does come from an unsustainable source, however, plastic bottles are actually recycled into 
                        polyester fabric, which is pretty amazing, but, on the downside, plastic is not compostable, which means 
                        it doesn’t break down well in soil.'),
            ('linen', 'Linen is another natural fibre we’ve been growing for centuries. Similar to hemp, it’s derived from a 
                        very versatile crop: the flax plant. Linen requires minimal water and pesticides, and grows in 
                        poor-quality soil. Plus, every part of the plant is used, so nothing is wasted. Linen is strong, naturally 
                        moth resistant, and, when untreated (i.e. not dyed), fully biodegradable. In addition to being good for the 
                        planet, it is also light and can withstand high temperatures, absorbing moisture without holding bacteria.'),
            ('silk', 'Silk is one of the most luxurious types of fabric used in the fashion industry and also in products for the home. 
                      You can find it in cushions, pillow and duvet covers, bedspreads, lampshades and others. According to a Chinese 
                      legend, it was discovered by an empress who was sipping her tea under a mulberry tree when a cocoon fell into her 
                      cup and began to open up to reveal the shiny fibres. There is no doubt that silk is a beautiful material. It 
                      keeps you cooler when the weather is warm and warmer the the weather is cool. There are several reasons why silk can 
                      be considered very sustainable but also reasons why you may prefer to avoid it. We will explain below what some of these 
                      characteristics are. Silk is a natural material, a protein fibre produced by silkworms. This fibre is 
                      excreted from its glands in one continuous filament of up to 1.3m in order to build the cocoon. When ready, 
                      the filament is unwound from the cocoon, dried and weaved in a loom to make the silk fabric.As silk is a natural fibre it 
                      will easily biodegrade in the soil when discarded after the end of its useful life and will not pollute the environment like 
                      other petroleum-based fabrics such as acrylic or nylon. It can be composted together with your food and garden waste.The commercial 
                      production process certainly cannot be considered vegan as it involves killing the silk worm in boiling water during the 
                      extraction of the silk thread from the cocoon.As with any other type of fabric silk is usually dyed. Many dyes applied to fabrics 
                      can be toxic and sometimes formaldehyde can be used in the finishing process of silk, which could affect your health. To avoid 
                      having any toxic materials in your home look for undyed silk or silk dyed with non-toxic dyes. Also, have a look for silk that is finished 
                      with citric acid rather than formaldehyde.'),
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
            
=======
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
>>>>>>> e44383d0cde498618f02eb72545c05ead7a03c5c
