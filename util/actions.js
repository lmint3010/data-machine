const langCodeModel = require('../model/langCodeModel');

exports.optimizeStr = (str) => str.replace(/[\n\s]/g, '').toLowerCase();

exports.compareStr = (str1, str2) =>  {
  const optimzeStr = str => str.replace(/[\n\s]/g, '').toLowerCase();
  str1 = optimzeStr(str1);
  str2 = optimzeStr(str2);
  return str1 === str2;
};

exports.defaultRender = async () => ({
  title: 'Language Machine',
  searchValue: '',
  langCodeList: await langCodeModel.find()
});