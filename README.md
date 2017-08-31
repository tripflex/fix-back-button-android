# fix-back-button-android
Meteor package for fixing the native back button on Android

This is a fork of the remcoder version, which fixes the cordova dependency which is no longer available on npm (and causes failure on meteor)

## Quick start
Just add this package and you're good to go:

    meteor add tripflex:fix-back-button-android

## The problem
When you run a meteor app on Android, it suffers from a broken back button.
Apparently the Cordova wrapper causes a redirect when initially loading the app.
This means that you can't use the back button to get out of the app as normal on Android.
Sometimes you can get out when you press the back button repeatedly
and sometimes you can't get out at all and you'll just see your app reloading.

This package has been updated to only suspend when on the root page of the meteor app


## The solution (NEW & Recommended)
To resolve this we can handle the back button event ourselves and force the app to suspend.
https://stackoverflow.com/questions/28055836/back-button-in-cordova-phongap-meteor-build-for-android-wont-close-application

If you do not want to install this package, you can add the org.android.tools.suspend plugin using this command:
```shell
meteor add cordova:org.android.tools.suspend@https://github.com/Lamerchun/org.android.tools.suspend.git#0dbb52cca0244ba22a8c7975895f0f45d2e9a4a9
```

    // requires Suspend plugin (org.android.tools.suspend)
    // see: https://github.com/Lamerchun/org.android.tools.suspend
    // meteor add cordova:org.android.tools.suspend@https://github.com/Lamerchun/org.android.tools.suspend.git#0dbb52cca0244ba22a8c7975895f0f45d2e9a4a9
    Meteor.startup(function(){
        if(Meteor.isCordova) {
            window.onpopstate = function () {
                if (history.state && history.state.initial === true) {
                    // You can also exit the app (instead of suspending)
                    //navigator.app.exitApp();
                    window.plugins.Suspend.suspendApp();
                }
            };

        }

       // Any other startup code below here
    });



## The solution (old)
To resolve this we can handle the back button event ourselves and force the app to suspend (this is the old repo method, and left here for reference, this package uses the method above)

    // requires Suspend plugin (org.android.tools.suspend)
    // see: https://github.com/Lamerchun/org.android.tools.suspend
    Meteor.startup(function() {
      if (Meteor.isCordova)
        document.addEventListener("backbutton", function () {
          window.plugins.Suspend.suspendApp();
        });
    });


You can paste this code in your app (don't forget to add the cordova plugin too) or you could just install this package which does nothing more than the code above ;-)
