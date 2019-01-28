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

  res.render('edit-content', result);
};

// Handle edit content
exports.handleEditContent = async (req, res) => {
  const { editLangCode, langEdit, engEdit } = req.body;
  const { engId, langId } = req.params;

  await engModel.findByIdAndUpdate(engId, { content: engEdit }) &&  
  await langModel.findByIdAndUpdate(langId, { content: langEdit, code: editLangCode })
   ? res.redirect('/')
   : console.log('Update Error !');
}