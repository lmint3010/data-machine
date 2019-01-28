const { langModel, engModel } = require('../model/indexModel');
const { optimizeStr, defaultRender} = require('../util/actions');

const onSearch = async (req, res, next) => {
  const { searchLangCode, searchEngContent } = req.query;

  const engDocs = await engModel.find();
  const langDocs = await langModel.find({ code: searchLangCode });

  const resultArr = engDocs.filter(e => 
    optimizeStr(e.content).indexOf( optimizeStr(searchEngContent) ) !== -1
  ).map(e => {
    const uid = e.uid;
    const lang = langDocs.find(e => e.uid === uid);

    if (!lang) return;
    
    return {
      uid: uid,
      engId: e._id,
      langId: lang._id,
      langCode: lang.code,
      engContent: e.content,
      langContent: lang.content
    }
  });

  const defaultRenderValue = await defaultRender();
  const result = {
    ...defaultRenderValue,
    code: searchLangCode,
    searchValue: searchEngContent,
    searchResult: resultArr.filter(e => !!e)
  }

  res.render('index', result);
};

module.exports = onSearch;