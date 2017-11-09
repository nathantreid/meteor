Package.describe({
  name: 'standard-compiler-css',
  version: '0.0.1',
  summary: 'Standard css compiler used with Meteor apps by default.',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "compileStdCSS",
  sources: [
    'plugin/compile-css.js'
  ]
});

Package.onUse(function (api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
