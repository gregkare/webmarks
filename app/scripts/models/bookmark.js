App.Bookmark = DS.Model.extend({
  url:   DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),

  domain: function() {
    var a = document.createElement('a');
    a.href = this.get('url');
    return a.hostname;
  }.property('url')
});

var normalizeBookmarkObjects = function(bookmark) {
  return {
    id: bookmark.id,
    url: bookmark.url,
    title: bookmark.title,
    description: bookmark.description
  };
};

App.Bookmark.sync = {
  findAll: function(load) {
    remoteStorage.bookmarks.archive.getAll().then(function(bookmarks) {
      objects = bookmarks.map(normalizeBookmarkObjects);
      load(objects);
    });
  }
};
