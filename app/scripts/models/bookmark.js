App.Bookmark = DS.Model.extend({
  url:   DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),

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
    description: bookmark.description,
    createdAt: bookmark.createdAt
  };
};

App.Bookmark.sync = {
  findAll: function(load) {
    remoteStorage.bookmarks.archive.getAll().then(function(bookmarks) {
      objects = bookmarks.map(normalizeBookmarkObjects);
      load(objects);
    });
  },

  createRecord: function(record, didSave) {
    var object = {
      url: record.get('url'),
      title: record.get('title'),
      description: record.get('description'),
      createdAt: record.get('createdAt')
    };

    console.log(object);

    remoteStorage.bookmarks.archive.store(object).then(
      function(result) {
        console.log(result);
        if (result.errors) {
          console.log(errors);
        }
        else {
          record.id = result.id;
          didSave(record);
        }
      }
    );
  }
};
