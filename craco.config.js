const CracoLessPlugin = require('craco-less');
const path=require('path');

module.exports = {
    webpack: {
        alias: {
            '@':path.join(__dirname,'src')
        },//配置一个别名
        // plugins: {
        //     add: [], /* An array of plugins */ 
        //     remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */ 
        // },
        // configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
        // configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
    },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },//配置的主题色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};