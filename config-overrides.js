/* config-overrides.js */
const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path');

module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,
  // }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(),    // 修饰符
);


