App.Bookmark = Ember.Model.extend({
  url         : Ember.attr(),
  title       : Ember.attr(),
  description : Ember.attr(),
  createdAt   : Ember.attr(Date),

  domain: function() {
    var a = document.createElement('a');
    a.href = this.get('url');
    return a.hostname;
  }.property('url')
});


App.Bookmark.adapter = Ember.Adapter.create({

  findAll: function(klass, records) {
    var self = this;
    remoteStorage.bookmarks.archive.getAll().then(function(bookmarks){
      self.didFindAll(klass, records, bookmarks);
    });
  },

  didFindAll: function(klass, records, data) {
    records.load(klass, data);
  },

  createRecord: function(record) {
    var self = this;
    var serialized = record.toJSON();

    return remoteStorage.bookmarks.archive.store(serialized).then(function(data){
      self.didCreateRecord(record, data);
    });
  },

  didCreateRecord: function(record, data) {
    record.load(data.id, data);
    record.didCreateRecord();
  },

  saveRecord: function(record) {
    var self = this;
    var serialized = record.toJSON();

    return remoteStorage.bookmarks.archive.store(serialized).then(function(data){
      self.didSaveRecord(record, data);
    });
  },

  didSaveRecord: function(record, data) {
    record.didSaveRecord();
  },


});
