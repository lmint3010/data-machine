const express = require('express');
const router = express.Router();
const { onLoad, onAdd, onSearch } = require('../controller/indexController');

/* GET home page. */
router.get('/', onLoad);

router.post('/add', onAdd);

router.get('/search', onSearch);

module.exports = router;
