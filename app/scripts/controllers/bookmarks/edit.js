App.BookmarksNewController = Ember.ObjectController.extend({

  // url: null,
  // title: null,
  // description: null,
  // tags: null,

  commit: function() {
    console.log(this.content.toJSON);
    // this.save();
    // this.redirectTo('bookmarks');
  }

});

App.BookmarksEditController = App.BookmarksNewController.extend();
