const { langModel, engModel } = require('../model/indexModel');

exports.onDeleteContent = async (req, res) => {
  const { engId, langId, uid } = req.params;
  
  await langModel.findByIdAndRemove(langId);
  const scanner = await langModel.find({ uid });
  
  if(scanner.length === 0) await engModel.findByIdAndRemove(engId);
  res.redirect('/');
}