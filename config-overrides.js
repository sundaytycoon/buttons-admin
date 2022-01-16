const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');


module.exports = {
  path: (paths, env) => {
    paths.appSrc = path.resolve(__dirname, '.');
    paths.appIndexJs = path.resolve(__dirname, 'src/index.tsx');
    paths.appTypeDeclarations = path.resolve(__dirname, 'src/react-app-env.d.ts');
    paths.appPublic = path.resolve(__dirname, 'public');
    paths.appHtml = path.resolve(__dirname, 'public/index.html');
    return paths;
  },
  webpack: override(
    addWebpackAlias({
      '@client': path.resolve(__dirname, 'src'),
    })
  ),
}
