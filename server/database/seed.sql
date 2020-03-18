DROP DATABASE IF EXISTS seed;

CREATE DATABASE seed;

\c seed

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   username VARCHAR NOT NULL UNIQUE,
   password_digest VARCHAR NOT NULL
);

CREATE TABLE fabrics (
   id SERIAL PRIMARY KEY,
   fabric_type VARCHAR,
   score INT,
   fabric_desc VARCHAR,
   fabric_img VARCHAR

);

CREATE TABLE clothes (
   id SERIAL PRIMARY KEY,
   clothes_type VARCHAR,
   amount VARCHAR
);

CREATE TABLE items (
   id SERIAL PRIMARY KEY,
   item_img VARCHAR,
   fabric_id INT REFERENCES fabrics (id),
   clothes_id INT REFERENCES clothes (id),
   user_id INT REFERENCES users (id),
   color VARCHAR
);


INSERT INTO users (username, password_digest) 
   VALUES ('Sarah', '123');

INSERT INTO fabrics (fabric_type, score, fabric_desc, fabric_img) 
   VALUES('Hemp', 1, 'Hemp clothing is made from a natural fiber with many amazing advantages, both ecological 
                      and personal.  Hemp actually has a very long history of being used as a fibre, in fact, 
                      it has been cultivated for thousands of years and on almost every continent. It has been 
                      used in clothing, ropes and sails. 
                      Hemp is a type of “bast fibre” which means it’s one of a number of natural fibres derived 
                      from the stems of plants such as flax, jute and stinging nettle. The fabric has various 
                      natural advantages such as keeping you warm in winter, cool in summer and even protecting you 
                      from UV rays.
                      The fibre produced from pure hemp is similar to linen in texture. It can also be 
                      blended with other natural fibres to create fabrics with the durability of hemp and the 
                      softness of cotton or bamboo.
                      Not only is hemp gentle on the earth, it also requires very little water, especially when compared 
                      to cotton, which, according to Slate uses “about 50 percent more water per season than hemp.” But 
                      that’s not all. According to the same article, “When you add processing into the equation, cotton 
                      uses more than four times as much water as hemp.”', 'https://cdn.pixabay.com/photo/2017/11/03/19/06/herb-2915337_1280.jpg'),  
   
            ('Cotton', 1, 'Cotton is one of the most commonly used fabrics. This natural fibre is light and breathable but 
                           growing cotton can be problematic: conventional cotton is one of the thirstiest and most 
                           chemical-intensive crops to grow. It requires a lot of pesticides and, as a result, has a negative 
                           impact on the planet, and the people who grow it. 
                           Organic cotton, a more sustainable alternative to conventional cotton. It aims to lower the environmental 
                           impact by trying to remove harmful pesticides and other chemicals from the production process. 
                           If you’re looking for the most sustainable cotton, recycled cotton is the way to go. Recycled or 
                           upcycled cotton is made using post-industrial and post-consumer cotton waste. 
                           Recycled cotton has the potential to help reduce water and energy consumption, as well as help keep cotton 
                           clothes out of landfill.', 'https://cdn.pixabay.com/photo/2019/11/24/17/08/cotton-4649804_1280.jpg'),
            ('Polyester', 0,'Polyester is a man-made fiber that is synthesized from petroleum-based products. Polyester cloth was invented in 1941, so 
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
                        it doesn’t break down well in soil.', 'https://cdn.pixabay.com/photo/2015/09/08/15/43/scarf-930185_1280.jpg'),
            ('Linen', 0,'Linen is another natural fibre we’ve been growing for centuries. Similar to hemp, it’s derived from a 
                        very versatile crop: the flax plant. Linen requires minimal water and pesticides, and grows in 
                        poor-quality soil. Plus, every part of the plant is used, so nothing is wasted. Linen is strong, naturally 
                        moth resistant, and, when untreated (i.e. not dyed), fully biodegradable. In addition to being good for the 
                        planet, it is also light and can withstand high temperatures, absorbing moisture without holding bacteria.', 'https://cdn.pixabay.com/photo/2017/08/07/20/10/woven-2607340_1280.jpg'),
            ('Silk', 1, 'Silk is one of the most luxurious types of fabric used in the fashion industry and also in products for the home. 
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
                      with citric acid rather than formaldehyde.', 'https://cdn.pixabay.com/photo/2012/07/09/07/19/silk-52003_1280.jpg'),
            ('Spandex' , 0, 'Spandex, Lycra or elastane is a synthetic fiber known for its exceptional elasticity. It is stronger
                             and more durable than natural rubber.  Spandex  is another polymer fabric (like polyester) but with 
                             totally different properties.  Pieces of the polyurethane chain allow for stretching, hence the 
                             rubber-like quality.
                             Because of its elasticity and strength (stretching up to five times its length), spandex has been 
                             incorporated into a wide range of garments, especially in skin-tight garments.
                             Also like polyester, the process of making spandex takes raw materials, toxic chemicals, and a 
                             lot of energy.  Spandex doesn’t have a super long life, which means you have to keep buying new 
                             tights and leggings, bikinis and banana hammocks.
                             Created from polyurethane, a known carcinogen
                             Blends well with other fabrics
                             Creates form fitting and highly durable garments
                             Can be a cause of contact dermatitis
                             Non-biodegradeable', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leggings-1562164568.png?crop=1.00xw:1.00xh;0,0&resize=980:*'),
            ('Cashmere', 0, 'Cashmere doesn’t come from sheep, but from goats. The breed of goat is found 
                             between Mongolia, Southwest China, Iran, Tibet, Northern India and Afghanistan.
                             These goats have very little fat to protect them in the winter from the cold arid plains, so they 
                             develop soft, fleecy fibres underneath their coat, on the underbelly. These  hairs are what makes 
                             cashmere.
                             When the temperatures rise, the goats naturally shed their coats. That’s when producers comb out 
                             the fine hair, sort it by hand, send it to facilities to be cleaned, refined, baled and shipped to 
                             Europe, where they’re sold to companies.
                             Because of the rarity of the material (it takes four goats to produce enough hair to make one 
                             sweater), cashmere was initially expensive. 
                             These days, with the advent of fast fashion, it’s become easy to find cashmere.  But as always with 
                             fast fashion, when you get a low price, someone or something is paying, somewhere.
                             Goats are the first to pay the price of cheap cashmere production. As they have very little fat, 
                             shearing them too early mid-winter means they can freeze to death.
                             The grasslands of the Asian regions where the goats roam are also suffering. The increase in 
                             demand for cashmere came with the pressure to lower cost, and so a decrease in the price of the raw 
                             material. Herders now need more goats to produce the same amount of cashmere. More goats mean more 
                             mouths to feed and overpopulation is killing these lands: once green and unspoilt, these regions 
                             are quickly becoming deserts. This does not only affect these specific regions but creates an 
                             ecological imbalance for the planet.', 'https://cdn.pixabay.com/photo/2019/07/28/08/20/billy-goat-4368163_1280.jpg'),

            ('Cotton-Polyester', 0, 'A fabric made from a poly cotton blend combines the strengths of the two fibers. Poly 
                                     cotton garments are breathable, tear-resistant, and can be fashioned into abrasion-resistant
                                     fabrics, like canvas. While not as inexpensive as pure polyester, poly cotton blends do 
                                     tend to cost less than comparable garments made of 100% cotton and they provide much more 
                                     comfort. The previously mentioned 65/35 blend of cotton and polyester is the most popular 
                                     for work garments, particularly because of price, durability and a larger color selection 
                                     being available for purchase. When shopping for work garments, the choice between 100% 
                                     cotton and poly cotton blends depends largely on the work environment and personal 
                                     preference. If employees work indoors around machinery, the tear-resistance of poly cotton 
                                     may be favorable. If the work is in an outdoor setting, particularly in hot climates, 100% 
                                     cotton fabric could be the better choice. Before deciding, make sure to take all 
                                     environmental factors into consideration.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiWX0kOj7GgrkfGjmEMvfNlvZeRIHZV5aQxP_9vhReSWB0LrJW');
            

INSERT INTO clothes (clothes_type, amount) 
   VALUES   ('t-shirts', 4),
            ('sweater', 4),
            ('button down', 4),
            ('jeans', 3),
            ('trousers', 4),
            ('blazer', 1),
            ('coat', 2),
            ('sneakers', 3),
            ('dress shoes', 1);
           

INSERT INTO items (item_img, fabric_id, clothes_id, user_id, color)
   VALUES   ('https://pngimg.com/uploads/jeans/jeans_PNG5745.png',1, 4, 1, 'blue'),
            ('https://i.ebayimg.com/images/g/FXIAAOSwmBxa288A/s-l300.jpg',2, 1, 1, 'blue'),
            ('https://dk69ohdbihujq.cloudfront.net/image/catalog/2019/clothing/43068/2-sidel-embroidery-knitwear-sweater-blue-jessica-buurman-women-street-style-clothing.png',3, 2, 1, 'blue'),
            ('https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2018/11/Screen-Shot-2018-11-21-at-14.39.41-356x500.png',4, 5, 1, 'blue'),
            ('https://di2ponv0v5otw.cloudfront.net/posts/2019/12/29/5e092fc7180efdccfc5260dc/m_5e092fe690feb6967417ef57.jpg',1, 1, 1, 'red'),
            ('https://choosmeinstyle.com/wp-content/uploads/2019/01/blue-trousers-6901.jpg',6, 5, 1, 'blue'),
            ('https://www.gentlemansguru.com/wp-content/uploads/2018/08/Mens-Royal-Blue-Floral-Blazer-from-Gentlemansguru.com_-800x800.jpg',7, 6, 1, 'blue'),
            ('https://cache.mrporter.com/variants/images/2307389542182668/fr/w2000_q80.jpg',8, 9, 1, 'blue'),
            ('https://m.media-amazon.com/images/I/711CDckYjVL._SR500,500_.jpg',8, 7, 1, 'blue'),
            ('https://www.childrensplace.com/wcsstore/GlobalSAS/images/tcp/products/500/1125063_1028.jpg',2,3,1,'blue');

            