App.Router.map(function () {
  this.resource('bookmarks');
  this.route('import', { path: "/import" });
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

App.ImportRoute = Ember.Route.extend({

});
