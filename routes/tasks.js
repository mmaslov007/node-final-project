const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const [tasks] = await db.query('SELECT * FROM tasks');
        res.render('index', { tasks });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/task/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [task] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
        if (task.length === 0) {
            return res.status(404).send('Task not found');
        }
        res.render('task', { task: task[0] });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/add', async (req, res) => {
    const { title, description } = req.body;
    try {
        await db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/complete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('UPDATE tasks SET completed = true WHERE id = ?', [id]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM tasks WHERE id = ?', [id]);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
