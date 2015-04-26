# fix-back-button-android
Meteor package for fixing the native back button on Android

## Quick start
Just add this package and you're good to go:

    meteor add remcoder:fix-back-button-android

## The problem
When you run a meteor app on Android, it suffers from a broken back button. 
Apparently the Cordova wrapper causes a redirect when initially loading the app.
This means that you can't use the back button to get out of the app as normal on Android. 
Sometimes you can get out when you press the back button repeatedly 
and sometimes you can't get out at all and you'll just see your app reloading.

## The solution
To resolve this we can handle the back button event ourselves and force the app to suspend.

    // requires Suspend plugin (org.android.tools.suspend)
    // see: https://github.com/Lamerchun/org.android.tools.suspend
    Meteor.startup(function() {
      if (Meteor.isCordova)
        document.addEventListener("backbutton", function () {
          window.plugins.Suspend.suspendApp();
        });
    });

You can paste this code in your app (don't forget to add the cordova plugin too) or you could just install this package which does nothing more than the code above ;-)

## TODO
 - Support apps with internal links: only suspend when going back beyond top-level
    
