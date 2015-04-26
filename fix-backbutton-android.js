    // requires Suspend plugin (org.android.tools.suspend)
    // see: https://github.com/Lamerchun/org.android.tools.suspend
    Meteor.startup(function() {
      if (Meteor.isCordova)
        document.addEventListener("backbutton", function () {
          window.plugins.Suspend.suspendApp();
        });
    });
