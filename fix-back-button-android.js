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
    });
