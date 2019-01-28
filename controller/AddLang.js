const { defaultRender } = require('../util/actions');
const { langCodeModel } = require('../model/indexModel');

const onAddLang = async (req, res) => {
  const { langCode, country } = req.body;
  
  const document = new langCodeModel({
    code: langCode,
    country: country
  });

  document.save().then(() => res.redirect('/'));
}

module.exports = onAddLang;