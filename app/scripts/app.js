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

  App.Router.map(function () {
    this.resource('bookmarks');
  });

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('bookmarks');
    }
  });

  App.BookmarksRoute = Ember.Route.extend({
    model: function () {
      //TODO Use listView for bookmarks lists https://github.com/emberjs/list-view
      return App.Bookmark.find();
    }
  });

  App.initializer({
    name: "remoteStorage",

    initialize: function(container, application) {

      $(function(){
        remoteStorage.claimAccess({bookmarks: "rw"});
        remoteStorage.displayWidget('remotestorage-connect', { redirectUri: window.location.href });
      });
    }
  });

  remoteStorage.on('ready', function() {
    console.log("widget ready");
    App.advanceReadiness();
  });
})(this);
