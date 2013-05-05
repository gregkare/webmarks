/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();

  // if (window.location.hash.match(/#access_token=.+/)) {
  App.deferReadiness();
  // }

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.BasicAdapter'
  });

  App.initializer({
    name: "remoteStorage",

    initialize: function(container, application) {

      $(function(){
        remoteStorage.claimAccess({bookmarks: "rw"});
        remoteStorage.displayWidget('remotestorage-connect', { redirectUri: window.location.href });

        // html2canvas( [ document.body ], {
        //   onrendered: function(canvas) {
        //     document.body.appendChild( canvas );
        //   }
        // });
      });
    }
  });

  remoteStorage.on('ready', function() {
    // console.log("widget ready");
    App.advanceReadiness();
  });
})(this);
