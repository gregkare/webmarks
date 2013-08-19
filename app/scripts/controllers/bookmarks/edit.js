App.BookmarksNewController = Ember.ObjectController.extend({

  commit: function() {
    console.log(this.get("content").toJSON());
    this.get("content").save();
    this.transitionToRoute('bookmarks');
  }

});

App.BookmarksEditController = App.BookmarksNewController.extend();
