const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true, // 允许用js修改antd底层样式
            modifyVars: { '@primary-color': 'orange' }, // 注意安装的less-loader的版本
        }
    }),
);