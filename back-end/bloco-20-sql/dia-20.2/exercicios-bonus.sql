-- EXERCICIOS BONUS

-- 1-1
SELECT piece, price, provider FROM PiecesProviders.Provides
WHERE provider = 'RBT';

-- 1-2
SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC LIMIT 5;

-- 1-3
SELECT provider, price FROM PiecesProviders.Provides
ORDER BY price DESC LIMIT 4 OFFSET 3;

-- 1-4
SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;

-- 1-5
SELECT COUNT(*) FROM PiecesProviders.Provides
WHERE  piece = 1;
