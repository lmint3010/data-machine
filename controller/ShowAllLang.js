const langCodeModel = require('../model/langCodeModel');

const ShowAllLang = async (req, res) => {
  const finder = await langCodeModel.find();
  const result = { docs: finder };

  res.render('languages', result);
}

module.exports = ShowAllLang;