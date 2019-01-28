const express = require('express');
const router = express.Router();

const { 
  onAdd, 
  onLoad,
  onSearch,
  onAddLang,
  onEditContent,
  handleEditContent,
} = require('../controller/IndexController');

/* GET home page. */
router.get('/', onLoad);

router.post('/add', onAdd);

router.get('/search', onSearch);

router.post('/add-lang', onAddLang);

router.get('/edit-content/:engId/:langId/:langCode', onEditContent);

router.post('/update-content/:engId/:langId', handleEditContent);

module.exports = router;