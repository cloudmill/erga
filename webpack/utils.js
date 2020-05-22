exports.pages = function (env, folder = '') {
  const rootPagesFolderName = 'pages';
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const fs = require('fs');
  const path = require('path');
  const viewsFolder = path.resolve(__dirname, `../src/views/${rootPagesFolderName}/${folder}`);

  const pages = [];

  fs.readdirSync(viewsFolder).forEach(view => {
    if (view.split('.')[1] === undefined)
      return false;

    const viewName = view.split('.')[0];
    let fileName;
    if (env === 'development') {
      fileName = folder === '' ? `${viewName}/index.html` : `${folder}/${viewName}/index.html`;
    } else {
      fileName = folder === '' ? `${viewName}.html` : `${folder}/${viewName}.html`;
    }
    const excludeHTML = fileName === 'history1990.html' || fileName === 'history2000.html' || fileName === 'history2010.html';
    const options = {
      filename: fileName,
      template: `views/${rootPagesFolderName}/${folder}/${view}`,
      inject: excludeHTML ? false : true
    };

    if (env === 'development') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      };
    }

    pages.push(new HtmlWebpackPlugin(options));
  })

  return pages;
}
