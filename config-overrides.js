//安装 babel-plugin-import,customize-cra，react-app-rewired修改默认脚手架配置

const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: { "@primary-color": "#1DA57A" },
//   })
);
