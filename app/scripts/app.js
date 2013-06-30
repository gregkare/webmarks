/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();

  // if (window.location.hash.match(/#access_token=.+/)) {
  App.deferReadiness();
  // }

  // App.Store = DS.Store.extend({
  //   revision: 12,
  //   adapter: 'DS.BasicAdapter'
  // });

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: DS.RSAdapter.create()
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

  App.ApplicationView = Ember.View.extend({
    currentPathDidChange: function() {
      Ember.run.next( this, function() {
        this.$(".pure-menu ul li:has(>a.active)").addClass('pure-menu-selected');
        this.$(".pure-menu ul li:not(:has(>a.active))").removeClass('pure-menu-selected');
      });
    }.observes('controller.currentPath')
  });

  remoteStorage.on('ready', function() {
    // console.log("widget ready");
    App.advanceReadiness();
  });

  window.onscroll = function(){
    if (document.documentElement.scrollTop > 50) {
      $('.header .pure-menu').addClass('transparent');
    } else {
      $('.header .pure-menu').removeClass('transparent');
    }
  };
})(this);
