Package.describe({
  name: 'tripflex:fix-back-button-android',
  version: '0.0.2',
  summary: 'Fixes the native back button on Android (fork of remcoder updated to work with org.android.tools.suspend)',
  git: 'https://github.com/tripflex/fix-back-button-android',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('fix-back-button-android.js');
});

Cordova.depends({
  'org.android.tools.suspend':'https://github.com/Lamerchun/org.android.tools.suspend.git#0dbb52cca0244ba22a8c7975895f0f45d2e9a4a9'
});

