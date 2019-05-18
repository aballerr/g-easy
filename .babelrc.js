const loose = true;
const cjs = true;

module.exports = {
  presets: [["@babel/env", { loose, modules: false }]],
  plugins: [
    ["@babel/proposal-decorators", { legacy: true }],
    ["@babel/proposal-object-rest-spread", { loose }],
    "@babel/transform-react-jsx",
    cjs && ["@babel/transform-modules-commonjs", { loose }],
    ["@babel/transform-runtime", { useESModules: !cjs }]
  ].filter(Boolean)
};
