const { langCodeModel, langModel, engModel } = require('../model/indexModel');

exports.onEditContent = async (req, res) => {
  const { engId, langId, langCode } = req.params;

  const result = {
    langCode: langCode,
    engId: engId,
    langId: langId,
    codes: await langCodeModel.find(),
    eng: await engModel.findById(engId),
    lang: await langModel.findById(langId)
  };

  res.render('edit-content', { data: result });
};

exports.handleEditContent = async (req, res) => {
  const { editLangCode, langEdit, engEdit } = req.body;
  const { engId, langId } = req.params;

  console.log(`
    EngId: ${engId}
    LangId: ${langId}
    eng-content: ${engEdit}
    lang-content: ${langEdit}
    edit-lang-code: ${editLangCode}
  `);

  res.end();
}