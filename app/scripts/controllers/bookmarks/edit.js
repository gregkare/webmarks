App.BookmarksNewController = Ember.ObjectController.extend({

  commit: function() {
    console.log(this.content.toJSON);
    // this.save();
    // this.redirectTo('bookmarks');
  }

});

App.BookmarksEditController = App.BookmarksNewController.extend();
