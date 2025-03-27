const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) return res.status(400).json({ error: 'Missing iso parameter' });

    const time = new Date(iso);
    if (isNaN(time.getTime())) {
        return res.status(400).json({ error: 'Invalid ISO timestamp' });
    }

    res.json({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    });
});

router.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) return res.status(400).json({ error: 'Missing iso parameter' });

    const time = new Date(iso);
    if (isNaN(time.getTime())) {
        return res.status(400).json({ error: 'Invalid ISO timestamp' });
    }

    res.json({
        unixtime: time.getTime()
    });
});

module.exports = router;