App.BookmarksIndexController = Ember.ArrayController.extend({

  remove: function(bookmark) {
    console.log("Deleting " + bookmark.id);
    bookmark.deleteRecord();
    this.transitionToRoute('bookmarks');
  }

});
