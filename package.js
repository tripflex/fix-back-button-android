Package.describe({
  name: 'remcoder:fix-backbutton-android',
  version: '0.0.1',
  summary: 'Fixes the native backbutton on Android',
  git: 'https://github.com/remcoder/fix-backbutton-android',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fix-backbutton-android.js');
});

Cordova.depends({
  'org.android.tools.suspend':'0.1.2'
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('remcoder:fix-backbutton-android');
  api.addFiles('fix-backbutton-android-tests.js');
});
