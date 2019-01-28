const onLoad = require('./Home');
const onSearch = require('./Search');
const onAdd = require('./AddContent');
const onAddLang = require('./AddLang');
const { onEditContent, handleEditContent } = require('./EditContent');
const { onDeleteContent } = require('./DeleteContent');
const ShowAllLang = require('./ShowAllLang');
const DeleteLang = require('./DeleteLang');

module.exports = { 
  onAdd, onLoad, onSearch, 
  onAddLang, onEditContent, handleEditContent, 
  onDeleteContent, ShowAllLang, DeleteLang };