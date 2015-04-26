Package.describe({
  name: 'remcoder:fix-back-button-android',
  version: '0.0.1',
  summary: 'Fixes the native backbutton on Android',
  git: 'https://github.com/remcoder/fix-back-button-android',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fix-back-button-android.js');
});

Cordova.depends({
  'org.android.tools.suspend':'0.1.2'
});

