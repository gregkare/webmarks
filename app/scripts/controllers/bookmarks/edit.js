App.BookmarksEditController = Ember.ObjectController.extend({

  url: null,
  title: null,
  description: null,
  tags: null,

  save: function() {
    this.id = this.id || remoteStorage.bookmarks.archive.idForUrl(this.url);
    this.createdAt = this.createdAt || new Date();
    this.get('store').commit();
    this.redirectTo('bookmarks');
  }

});

App.BookmarksNewController = App.BookmarksEditController.extend();
