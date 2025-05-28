const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.status(400).json({ message: 'Missing fields' });

  try {
    // простая авторизация/регистрация: если пользователя нет - создаём
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (user.rows.length === 0) {
      await pool.query('INSERT INTO users (username, password, balance) VALUES ($1, $2, $3)', [username, password, 0]);
      return res.json({ message: 'User registered' });
    } else {
      // Проверка пароля (без хеша, для простоты)
      if (user.rows[0].password === password) {
        return res.json({ message: 'User authenticated' });
      } else {
        return res.status(401).json({ message: 'Invalid password' });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
