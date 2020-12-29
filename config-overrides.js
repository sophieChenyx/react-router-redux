/* config-overrides.js */
const { override, addWebpackAlias, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
  // antd 按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src'),
    "@views": path.resolve(__dirname, 'src/views')
  }),
  addDecoratorsLegacy(),    // 修饰符
);


