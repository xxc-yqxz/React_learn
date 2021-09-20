// 配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,    // 允许用js修改antd底层文件
            modifyVars: { '@primary-color': 'orange' },    // 修改哪个变量
        }
    }),
);