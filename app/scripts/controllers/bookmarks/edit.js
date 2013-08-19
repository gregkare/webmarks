App.BookmarksNewController = Ember.ObjectController.extend({

  commit: function() {
    console.log(this.get("content").toJSON());
    this.get("content").save();
    this.transitionToRoute('bookmarks');
  }

});

// App.BookmarksNewController = Ember.ObjectController.extend({
// 
//   logContent: function() {
//     console.log(this.get("content"));
//   }.observes("content"),
// 
//   commit: function() {
//     console.log(this.get("content").toJSON);
//     // this.save();
//     // this.redirectTo('bookmarks');
//   }
// 
// });

// App.BookmarksEditController = Ember.ObjectController.extend({
//   content: null;

  // logContent: function() {
  //   console.log(this.get("content"));
  // }.observes("content"),

  // commit: function() {
  //   console.log(this.get("content").toJSON);
  //   // this.save();
  //   // this.redirectTo('bookmarks');
  // }
// });
