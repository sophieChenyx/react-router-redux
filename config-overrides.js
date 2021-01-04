/* config-overrides.js */
const { override, addWebpackAlias, addLessLoader, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
    "@views": path.resolve(__dirname, 'src/views')
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' },
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addDecoratorsLegacy(),    // 修饰符
);


