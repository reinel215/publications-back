INSERT INTO "user"(name, surname, avatar, username, role) VALUES
('Reinel', 'Arteaga', 'https://cdnb.artstation.com/p/assets/images/images/035/988/597/large/edward-munn-edm-asset.jpg?1616441586', 'reinel-1', 'user'),
('Juan', 'Perez', 'https://cdnb.artstation.com/p/assets/images/images/035/988/597/large/edward-munn-edm-asset.jpg?1616441586', 'juanito', 'user'),
('Pedro', 'Admin', 'https://cdnb.artstation.com/p/assets/images/images/035/988/597/large/edward-munn-edm-asset.jpg?1616441586', 'pedro', 'admin');


INSERT INTO post(message, user_id, location, status) VALUES
('Hellow everybody! lets bring the avatar down today!', 1, 'venezuela', 'drafted'),
('Hellow everybody! lets bring the avatar down today 2!', 1, 'venezuela', 'drafted'),
('Hellow everybody! lets bring the avatar down today 3!', 2, 'brazil', 'drafted');


INSERT INTO "like"(user_id, post_id) VALUES
(1,1),
(2,2),
(1,3);