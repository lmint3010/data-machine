const onLoad = require('./Home');
const onSearch = require('./Search');
const onAdd = require('./AddContent');
const onAddLang = require('./AddLang');
const { onEditContent, handleEditContent } = require('./EditContent');

module.exports = { onAdd, onLoad, onSearch, onAddLang, onEditContent, handleEditContent };