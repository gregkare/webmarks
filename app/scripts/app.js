/*global Ember */

(function (window) {
  var App = window.App = Ember.Application.create();

  App.Router.map(function () {
    // put your routes here
  });

  App.IndexRoute = Ember.Route.extend({
    model: function () {
      return ['red', 'yellow', 'blue'];
    }
  });

  App.initializer({
    name: "remoteStorage",

    initialize: function(container, application) {
      $(function(){
        remoteStorage.claimAccess({bookmarks: "rw"});
        remoteStorage.displayWidget('remotestorage-connect');
      });
    }
  });
})(this);
