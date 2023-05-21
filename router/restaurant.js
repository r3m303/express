const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.send('GET API');
});

router.get('/:id', (req, res)=> {
    res.send('GET ONE API');
});

router.post('/', (req, res) => {
    res.send('POST API');
});

router.put('/:id', (req, res ) => {
    res.send('PUT API');
});

module.exports = router;

app.delete('/apis/restaurants/:id', (req, res) => {
    res.send('DELETE API');
});
