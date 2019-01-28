const langCodeModel = require('../model/langCodeModel');

const DeleteLang = async (req, res) => {
  const { langId } = req.params;
  await langCodeModel.findByIdAndRemove(langId);
  res.redirect('/country-code');
}

module.exports = DeleteLang;