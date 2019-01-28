const uniqid = require('uniqid');
const { langModel, engModel } = require('../model/indexModel');
const { compareStr } = require('../util/actions');

const onAdd = async (req, res, next) => {
  const { langCode, addEngContent, addSubContent } = req.body;

  const engDocs = await engModel.find();
  const langDocs = await langModel.find({ code: langCode });

  const engChecker = engDocs.find(e => compareStr(e.content, addEngContent));

  if(engChecker) {
    const langChecker = langDocs.find(e => e.uid === engChecker.uid);

    if(langChecker) res.redirect('/')

    else {
      const newContent = new langModel({
        uid: engChecker.uid,
        code: langCode,
        content: addSubContent
      });
      newContent.save()
        .then(() => res.redirect('/'));
    }
  }

  else {
    const uid = uniqid();

    const newEngContent = new engModel({
      uid: uid,
      content: addEngContent
    });

    const newLangContent = new langModel({
      uid: uid,
      code: langCode,
      content: addSubContent
    });
  
    await newEngContent.save() && await newLangContent.save()
      ? res.redirect('/')
      : console.log('Save Error !');
  }
}

module.exports = onAdd;