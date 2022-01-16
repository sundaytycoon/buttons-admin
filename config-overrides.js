/* eslint-disable */
const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = {
  paths: function (paths, env) {
    paths.appSrc = path.resolve(__dirname, '.');
    paths.appIndexJs = path.resolve(__dirname, 'client/index.tsx');
    paths.appTypeDeclarations = path.resolve(__dirname, 'client/react-app-env.d.ts');
    paths.appPublic = path.resolve(__dirname, 'shared/public');
    paths.appHtml = path.resolve(__dirname, 'shared/public/index.html');
    return paths;
  },
  webpack: override(
    addWebpackAlias({
      '@client': path.resolve(__dirname, 'client'),
      '@shared': path.resolve(__dirname, 'shared'),
    })
  )
};
