const { defaultRender } = require('../util/actions');

const onLoad = async (req, res, next) => {
  res.render('index', await defaultRender());
}

module.exports = onLoad;