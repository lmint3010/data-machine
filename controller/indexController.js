const uniqid = require('uniqid');
const { compareStr } = require('../util/actions');
const { langCodeModel, langModel, engModel } = require('../model/indexModel');

const renderValue = async () => ({
  title: 'Language Machine',
  langCodeList: await langCodeModel.find()
});

exports.onLoad = async (req, res, next) => {
  res.render('index', await renderValue());
}

exports.onSearch = async (req, res, next) => {
  const { searchLangCode, searchEngContent } = req.query;

  const engDocs = await engModel.find();
  const langDocs = await langModel.find({ code: searchLangCode });

  const resultArr = engDocs.filter(e => 
    e.content.toLowerCase().indexOf( searchEngContent.toLowerCase() ) !== -1
  ).map(e => {
    const uid = e.uid;
    const lang = langDocs.find(e => e.uid === uid);
    return {
      engid: e._id,
      langid: lang._id,
      engContent: e.content,
      langContent: lang.content
    }
  });

  const defaultRenderValue = await renderValue();
  const result = {
    ...defaultRenderValue,
    searchResult: resultArr
  }

  res.render('index', result);
};

exports.onAdd = async (req, res, next) => {
  const { langCode, addEngContent, addSubContent } = req.body;

  if(!addEngContent || !addSubContent) return;

  const engDocs = await engModel.find();
  const langDocs = await langModel.find({ code: langCode });

  const engChecker = engDocs.find(e => compareStr(e.content, addEngContent));
  const langChecker = langDocs.find(e => compareStr(e.content, addSubContent));

  let uid = uniqid();

  if(engChecker && langChecker) res.redirect('/');
  
  else if (engChecker && !langChecker) {
    uid = engChecker.uid;

    const newLangContent = new langModel({
      uid: uid,
      code: langCode,
      content: addSubContent
    });

    newLangContent.save()
      .then(() => res.redirect('/'));
  } 
  
  else {
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