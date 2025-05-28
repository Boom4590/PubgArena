CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  balance INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS tournaments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  status VARCHAR(50)
);

-- Добавим тестовые турниры
INSERT INTO tournaments (name, status) VALUES 
('Турнир 1', 'Свободный'),
('Турнир 2', 'Оплаченный'),
('Турнир 3', 'Свободный');
